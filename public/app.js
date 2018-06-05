"use strict";

var app = angular.module("ia3vpApp", ['ngSanitize']);

var serverUrl


app.controller("acordaoCtrl", function($rootScope, $scope, $http) {
	
	$rootScope.apiUrl = 'http:35.231.196.213/ia3vp/';
	
	$scope.filtro = {};
	$scope.acordaoAtual = null;
	
	$scope.buscar = function() {
		var query = '';
		if ($scope.filtro.textoBusca) {
			query = 'q=processo:' + textoBusca.replace(/[^\d]/g, '');
		}
		
		$http({
			method : 'GET',
			url : $rootScope.apiUrl + 'acordao/_search/?' + query
		}).then(function successCallback(response) {
			$scope.acordaos = [];
			
			var data = response.data;
			angular.forEach(data.hits.hits, function(value, key) {
				this.push(value['_source']);
			}, $scope.acordaos);
		}, function errorCallback(response) {
			$scope.response = response;
		});
	};
	
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
