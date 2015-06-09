(function (){
	'use strict';
	angular.module('eliteApp').factory('forumApi', ['$http', '$q', '$ionicLoading', '$timeout', '$rootScope', 'appConfig', forumApi]);

	function forumApi($http, $q, $ionicLoading, $timeout, $rootScope, appConfig){
		var currentForumId;
		var currentThreadId;
		var currentUser;

		function getServices(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get(appConfig.url + '/findAllForums')
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

		function getThreadsByForumId(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get(appConfig.url + "/forum/getThreads/f=" + currentForumId)
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

		function getForumById(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get(appConfig.url + "/forum/getForum/f=" + currentForumId)
			.success(function(data, status){
				console.log("Received forum info ok", data, status);
				$ionicLoading.hide();
				deferred.resolve(data);
			})
			.error(function(){
				console.log("Error while making http call for info forum");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}

		function getThreadById(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			console.log("in forumApi, threadid is: " + currentThreadId);

			$http.get(appConfig.url + "/forum/thread/"+ currentThreadId)
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

		function getUserInfo(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get(appConfig.url + "/currentUser")
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

		function login(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: appConfig.url + '/authenticate',
                data: currentUser,
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

		function getSearchResult(forumId, topic){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});

			if(topic.method==2){
				$http.get(appConfig.url + '/search/f=' + forumId +'/a=' + topic.content)
				.success(function(data){
					deferred.resolve(data);
					$ionicLoading.hide();
				})
				.error(function(){
					console.log("error while making http call for forum");
					$ionicLoading.hide();
					deferred.reject();
				});
			}
			else{
				$http.get(appConfig.url + '/search/f=' + forumId +'/n=' + topic.content)
				.success(function(data){
					deferred.resolve(data);
					$ionicLoading.hide();
				})
				.error(function(){
					console.log("error while making http call for forum");
					$ionicLoading.hide();
					deferred.reject();
				});
			}
			return deferred.promise;
		
		}


		function setThreadId(ThreadId){
			currentThreadId = ThreadId;
		}

		function getThreadId(){
			return currentThreadId;
		}

		function getForumId(){
			return currentForumId;
		}

		function setForumId(forumId){
			currentForumId = forumId;
		}

		function setCurrentUser(user){
			currentUser = user;
		};

		function getCurrentUser(){
			return currentUser;
		}



		return {
			login: login,
			getServices: getServices,
			getForumById: getForumById,
			getThreadById: getThreadById,
			getUserInfo: getUserInfo,
			getThreadId: getThreadId,
			setForumId: setForumId,
			setThreadId: setThreadId,
			setCurrentUser:setCurrentUser,
			getCurrentUser:getCurrentUser,
			currentThreadId:currentThreadId,
			getThreadsByForumId:getThreadsByForumId,
			getForumId: getForumId,
			getSearchResult: getSearchResult
		};
	}

	

})();