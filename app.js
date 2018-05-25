var app = angular.module("ia3vpApp", ['ngSanitize']);


app.controller("ementaCtrl", function($scope) {
	
	$scope.acordaos = ACORDAOS;
});


app.filter('cnj', function() {
   return function(val){
	   if (val) {		   
		   return val.replace(/^(\d{7})(\d{2})(\d{4})(\d)(\d{2})(\d{4})$/, '$1-$2.$3.$4.$5.$6');
	   }
	   return val;
   };
});