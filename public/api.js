"use strict";

app.factory('api', function() {
  return {
	  getDocumentos: function() {
		  return [
			  {numero_processo: "1/2018"}
		];
	  }
  };
});