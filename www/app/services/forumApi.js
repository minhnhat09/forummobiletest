(function (){
	'use strict';
	angular.module('eliteApp').factory('forumApi', ['$http', '$q', '$ionicLoading', '$timeout', '$rootScope', forumApi]);

	function forumApi($http, $q, $ionicLoading, $timeout, $rootScope){
		var currentForumId;
		var currentThreadId;
		var currentUser;



		function getServices(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get('http://localhost:9000/forum/api/findAllForums')
			.success(function(data){
				deferred.resolve(data);
				$ionicLoading.hide();
			})
			.error(function(){
				console.log("error while making http call for forum");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}

		function getForumById(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get("http://localhost:9000/forum/api/forum/" + currentForumId)
			.success(function(data, status){
				console.log("Received list threads ok", data, status);
				$ionicLoading.hide();
				deferred.resolve(data);
			})
			.error(function(){
				console.log("Error while making http call for list threads");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}

		function setForumId(forumId){
			currentForumId = forumId;
		}

		function getThreadById(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get("http://localhost:9000/forum/api/findThread")
			.success(function(data, status){
				console.log("Received list posts ok", data, status);
				$ionicLoading.hide();
				deferred.resolve(data);
			})
			.error(function(){
				console.log("Error while making http call for list threads");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}

		function getUserById(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get("http://localhost:9000/forum/api/user/" + currentUser)
			.success(function(data, status){
				console.log("Received user ok", data, status);
				$ionicLoading.hide();
				deferred.resolve(data);
			})
			.error(function(){
				console.log("Error while making http call for list threads");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}

		function login(user){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});

			$http({
                method: 'POST',
                url: 'http://localhost:9000/forum/api/authenticate ',
                data: user,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {

                console.log(data);
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


		function setThreadId(ThreadId){
			currentThreadId = ThreadId;
		}

		function setCurrentUser(user){
			currentUser = user;
		}

		function getCurrentUser(){
			return currentUser;
		}


		return {
			login: login,
			getServices: getServices,
			getForumById: getForumById,
			setForumId: setForumId,
			getThreadById: getThreadById,
			setThreadId: setThreadId,
			setCurrentUser: setCurrentUser,
			currentUser:currentUser,
			getUserById: getUserById
			
		};
	}

	

})();