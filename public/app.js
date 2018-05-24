"use strict";

var app = angular.module("lfhApp", ['ngSanitize']);

var serverUrl


app.controller("lfhCtrl", function($rootScope, $scope, $http) {
	
	$scope.name = 'Lawtech Floripa Hackathon 2018';
});