"use strict";

var app = angular.module("ia3vpApp", ['ngSanitize']);


app.controller("acordaoCtrl", function($scope, $http) {
	
	$scope.filtro = {};
	$scope.acordaoAtual = null;
	
	$scope.buscar = function(textoBusca) {
		var query = '';
		if (textoBusca) {
			query = 'q=*:' + textoBusca
		} else {
			query = 'sort=movimentacao:desc'
		}
		
		$http({
			method : 'GET',
			url : 'http://localhost:9200/ia3vp/acordao/_search/?' + query
		}).then(function successCallback(response) {
			$scope.acordaos = [];
			
			
			var data = response.data;
			$scope.filtro.total = data.hits.total

			angular.forEach(data.hits.hits, function(value, key) {
				// TODO: Ajustar campos no índice
				this.push(value['_source']);
			}, $scope.acordaos);

		}, function errorCallback(response) {
			$scope.response = response;
		});
	};
	

	$scope.classificar = function(acordao) {

		$http({
			method : 'POST',
			url : 'http://localhost:9200/ia3vp/acordao/' + acordao.cdprocesso,
			data: acordao
		}).then(function successCallback(response) {
			$scope.response = response;
		}, function errorCallback(response) {
			$scope.response = response;
		});
	}
	
	$scope.buscar();
});


app.filter('cnj', function() {
   return function(val){
	   if (val) {		   
		   return val.replace(/^(\d{7})(\d{2})(\d{4})(\d)(\d{2})(\d{4})$/, '$1-$2.$3.$4.$5.$6');
	   }
	   return val;
   };
});