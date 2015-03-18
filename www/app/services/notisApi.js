(function(){
	'use strict';
	angular.module('eliteApp').factory('notisApi', ['$http', '$q', '$ionicLoading', notisApi]);

	function notisApi ($http, $q, $ionicLoading) {
		function getMessagesByCurrentUser(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get("http://localhost:9000/forum/api/user/messages/currentUser")
			.success(function(data, status){
				console.log("Received list messages ok", data, status);
				$ionicLoading.hide();
				deferred.resolve(data);
			})
			.error(function(){
				console.log("Error while making http call for list messages");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}

		function getNotisByCurrentUser(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get("http://localhost:9000/forum/api/user/notis/currentUser")
			.success(function(data, status){
				console.log("Received list notis ok", data, status);
				$ionicLoading.hide();
				deferred.resolve(data);
			})
			.error(function(){
				console.log("Error while making http call for list notis");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}

		return{
			getMessagesByCurrentUser:getMessagesByCurrentUser,
			getNotisByCurrentUser:getNotisByCurrentUser
		};
	}

})();