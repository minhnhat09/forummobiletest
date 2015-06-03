(function(){
	'use strict';
	angular.module('eliteApp').factory('profileApi', ['$http', '$q', '$ionicLoading', '$ionicPopup', profileApi]);

	function profileApi($http, $q, $ionicLoading, $ionicPopup){
		
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

		function changePassword(password){
			var deferred = $q.defer();
			console.log(password);
			$ionicLoading.show({template: "Loading..."});
			$http({
				method: 'POST',
				url: 'http://localhost:9000/forum/api/profile/changePassword',
				data: password,
				header:{
					'Content-Type': 'application/json'
				}
			}).success(function(data, status, headers, config){
				
				$ionicLoading.hide();
				$ionicPopup.alert({
					title: "Success",
					template: data
				});
				deferred.resolve(data);
			}).error(function(data, status, headers, config){
				console.log(data);
				
				$ionicPopup.alert({
					title: "Erreur",
					template: data
				});
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
			getBookmarksByCurrentUser:getBookmarksByCurrentUser,
			changePassword: changePassword

		};
	}

})();