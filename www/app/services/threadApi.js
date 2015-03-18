(function(){
	'use strict';
	angular.module('eliteApp').factory('threadApi', ['$http', '$q', '$ionicLoading','$ionicPopup', threadApi]);
	function threadApi($http, $q, $ionicLoading, $ionicPopup){
		

		function commentThread(comment){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: 'http://localhost:9000/forum/api/thread/commentThread',
                data: comment,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {

                
                $ionicLoading.hide();
				deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                    console.log("error");
                    $ionicPopup.alert({
					     title: 'Erreur',
					     template: 'Nom d\'utilisateur ou mot de passe est incorrect'
					   });
                    $ionicLoading.hide();
					deferred.reject();
                });
            return deferred.promise;
		}


		

		return {
			commentThread:commentThread
		};
	}
})();