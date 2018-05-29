"use strict";

var app = angular.module("ia3vpApp", ['ngSanitize']);


app.controller("acordaoCtrl", function($scope, $http) {
	
	$scope.filtro = {};
	$scope.acordaoAtual = null;
	
	$scope.buscar = function(textoBusca) {	
		$http({
			method : 'GET',
			url : 'http://localhost:8080/'
		}).then(function successCallback(response) {
			$scope.acordaos = response.data;
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