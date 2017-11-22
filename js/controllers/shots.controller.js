angular.module('appShots')
.controller('ShotsController', function($scope, ListaShots,$q, $http) {
	$scope.titulo = "Lista de Shots";
	$scope.shots = [];
	var url_API = "https://api.dribbble.com/v1/shots/?access_token=660f90a5599a73248638282bf30c4b98f21a75757c98887c9ac81ee23cca2e03" ;

	ListaShots.listar().then(
		function(shots){
			$scope.shots = shots;
		}
	);
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	$scope.ordenarShots = function(paramName, paramValue, descriptionPage){
    	descriptionPage = ' - ' +descriptionPage;
		var paramNameWithCaracteres = '&'+paramName+'=';
    	$http.get(url_API+paramNameWithCaracteres+paramValue).then(
    		function(result){
      			shots = result.data;
  				$scope.shots = shots;
    		}
  		);
  	};
});