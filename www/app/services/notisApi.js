(function(){
	'use strict';
	angular.module('eliteApp').factory('notisApi', ['$http', '$q', '$ionicLoading', '$ionicPopup', notisApi]);

	function notisApi ($http, $q, $ionicLoading, $ionicPopup) {
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

		function sendMessage(message){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: 'http://localhost:9000/forum/api/user/notis/sendMessage',
                data: message,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
				deferred.resolve(data);
                $ionicLoading.hide();
            }).error(function (data, status, headers, config) {
                    console.log("error");
                    $ionicPopup.alert({
					     title: 'Erreur',
					     template: data
					   });
					deferred.reject();
                    $ionicLoading.hide();
                });
            return deferred.promise;
		}

		return{
			sendMessage:sendMessage,
			getMessagesByCurrentUser:getMessagesByCurrentUser,
			getNotisByCurrentUser:getNotisByCurrentUser
		};
	}

})();