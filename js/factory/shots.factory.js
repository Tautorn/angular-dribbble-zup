angular.module("appShots").factory("ListaShots", function($q, $http){
	return{
		listar:function(){
			var promessa = $q.defer();
			var url_API = "https://api.dribbble.com/v1/shots/?access_token=deb07c28a7f2e0bc874eef017267b7320b51a61d7f0da3c0fb826e06b965809b" ;
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