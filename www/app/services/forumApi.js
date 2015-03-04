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
			$http.get("http://localhost:9000/forum/api/forum/thread/"+ currentThreadId)
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
			$http.get("http://localhost:9000/forum/api/currentUser")
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
                url: 'http://localhost:9000/forum/api/authenticate',
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

		function commentThread(comment){

			comment.currentThreadId = currentThreadId;
			console.log(comment);
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: 'http://localhost:9000/forum/api/thread/commentThread',
                data: comment,
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

		function getThreadId(){
			return currentThreadId;
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
			currentThreadId:currentThreadId
		};
	}

	

})();