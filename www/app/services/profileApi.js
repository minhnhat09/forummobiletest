(function(){
	'use strict';
	angular.module('eliteApp').factory('profileApi', ['$http', '$q', '$ionicLoading', profileApi]);

	function profileApi($http, $q, $ionicLoading){
		
		function getGiftsByCurrentUser(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get("http://localhost:9000/forum/api/user/gifts/currentUser")
			.success(function(data, status){
				console.log("Received list gifts ok", data, status);
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


		function getContactsByCurrentUser(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get("http://localhost:9000/forum/api/user/contacts/currentUser")
			.success(function(data, status){
				console.log("Received list contacts ok", data, status);
				$ionicLoading.hide();
				deferred.resolve(data);
			})
			.error(function(){
				console.log("Error while making http call for list bookmarks");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}

		function getBookmarksByCurrentUser(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http.get("http://localhost:9000/forum/api/user/bookmarks/currentUser")
			.success(function(data, status){
				console.log("Received list bookmarks ok", data, status);
				$ionicLoading.hide();
				deferred.resolve(data);
			})
			.error(function(){
				console.log("Error while making http call for list bookmarks");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}

		return {
			getGiftsByCurrentUser:getGiftsByCurrentUser,
			getContactsByCurrentUser:getContactsByCurrentUser,
			getBookmarksByCurrentUser:getBookmarksByCurrentUser

		};
	}

})();