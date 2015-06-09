(function(){
	'use strict';
	angular.module('eliteApp').factory('mainApi', ['$http', '$q', '$ionicLoading', '$ionicPopup', 'appConfig', mainApi]);

	function mainApi ($http, $q, $ionicLoading, $ionicPopup, appConfig){
		
		function login(user){
			var deferred = $q.defer();
			console.log(user);
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: appConfig.url + '/authenticate',
                data: user,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                
                $ionicLoading.hide();
                console.log(data);
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


		function signUp(user){
			var deferred = $q.defer();
			console.log(user);
			$ionicLoading.show({template:"Loading..."});
			$http({
				method: 'POST',
				url: appConfig.url + '/signUp',
				data:user,
				headers:{
					'Content-Type': 'application/json'
				}
			}).success(function(data, status, headers, config){
				$ionicLoading.hide();
				console.log(data);
				deferred.resolve(data);
			}).error(function(data, status, headers, config){
				console.log("error");
				$ionicPopup.alert({
					title:'Erreur',
					template:'Problème de réseaux'
				});
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}	

		function demandCode(user){
			var deferred = $q.defer();
			console.log(user);
			$ionicLoading.show({template:"Loading..."});
			$http({
				method: 'POST',
				url: appConfig.url + '/demandCode',
				data:user,
				headers:{
					'Content-Type': 'application/json'
				}
			}).success(function(data, status, headers, config){
				$ionicLoading.hide();
				console.log(data);
				deferred.resolve(data);
			}).error(function(data, status, headers, config){
				console.log("error");

				$ionicPopup.alert({
					title:'Erreur',
					template:'Problème de réseaux'
				});
				
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}



		return {
			login: login,
			demandCode: demandCode
		};
	}

})();