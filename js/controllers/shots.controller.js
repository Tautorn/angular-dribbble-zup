angular.module('appShots')
.controller('ShotsController', function($scope, ListaShots,$q, $http) {
	$scope.titulo = "Lista de Shots";
	$scope.shots = [];
	var url_API = "https://api.dribbble.com/v1/shots/?access_token=deb07c28a7f2e0bc874eef017267b7320b51a61d7f0da3c0fb826e06b965809b" ;

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