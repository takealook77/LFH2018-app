var app = angular.module("ia3vpApp", ['ngSanitize']);


app.controller("ementaCtrl", function($scope) {
	
	$scope.acordaos = ACORDAOS;
});