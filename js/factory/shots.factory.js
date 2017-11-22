angular.module("appShots").factory("ListaShots", function($q, $http){
	return{
		listar:function(){
			var promessa = $q.defer();
			var url_API = "https://api.dribbble.com/v1/shots/?access_token=660f90a5599a73248638282bf30c4b98f21a75757c98887c9ac81ee23cca2e03" ;
			$http.get(url_API).then(
				function(result){
					var shots = [];

					angular.forEach(result.data, function(shot,id){
						shot.id = id;
						shots.push(shot);
					});

					promessa.resolve(shots);

				}
			);

			return promessa.promise;
		}

	};
});