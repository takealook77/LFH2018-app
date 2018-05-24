var app = angular.module("ia3vpApp", ['ngSanitize']);


app.controller("ementaCtrl", function($scope) {
    $scope.ementa = 'PROCESSUAL CIVIL - CONFLITO NEGATIVO DE COMPETÊNCIA - DISCUSSÃO ENTRE VARA DE DIREITO BANCÁRIO (SUSCITANTE) E VARA CÍVEL (SUSCITADA), AMBAS DA COMARCA DE SÃO JOSÉ - AÇÃO REVISIONAL - CONTRATO DE MÚTUO FIRMADO COM COOPERATIVA DE CRÉDITO - INSTITUIÇÃO FINANCEIRA FISCALIZADA PELO BANCO CENTRAL - INTELIGÊNCIA DO ART. 1º, CAPUT E § 1º, DA LEI COMPLEMENTAR N. 130/2009 - DEBATE ACERCA DE ENCARGOS DE NATUREZA BANCÁRIA ALEGADAMENTE ABUSIVOS E ILEGAIS - MATÉRIA ABRANGIDA PELO DIREITO BANCÁRIO - CONFLITO IMPROCEDENTE - COMPETÊNCIA DA VARA DE DIREITO BANCÁRIO SUSCITANTE.<br>   É das varas de Direito Bancário a competência para julgar feitos envolvendo pleito revisional de contrato de mútuo firmado com cooperativa de crédito - que legalmente é considerada instituição financeira fiscalizada pelo Bacen -, em demanda onde haja discussão acerca de encargos de natureza bancária alegadamente abusivos e ilegais.';
    
    $scope.getAnaliseTextual = function() {
    	return $scope.ementa.toLowerCase().replace(/(banc[^\s]+)+/g, "<mark>$1</mark>")
    }
});