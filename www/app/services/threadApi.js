(function(){
	'use strict';
	angular.module('eliteApp').factory('threadApi', ['$http', '$q', '$ionicLoading','$ionicPopup', 'appConfig', threadApi]);
	function threadApi($http, $q, $ionicLoading, $ionicPopup, appConfig){
					

		function commentThread(comment){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: appConfig.url + '/thread/commentThread',
                data: comment,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {

                
                $ionicLoading.hide();
				deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                    console.log("error");
                    $ionicPopup.alert({
					     title: 'Erreur',
					     template: 'Comment error'
					   });
                    $ionicLoading.hide();
					deferred.reject();
                });
            return deferred.promise;
		}

		function likeThread(data){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: appConfig.url + '/thread/likeThread',
                data: data,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
				deferred.resolve(data);
				
                $ionicLoading.hide();
            }).error(function (data, status, headers, config) {
                    console.log("error");
                    $ionicPopup.alert({
					     title: 'Erreur',
					     template: 'Comment error'
					   });
					deferred.reject();
                    $ionicLoading.hide();
                });
            return deferred.promise;
		}

		function dislikeThread(data){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: appConfig.url + '/thread/dislikeThread',
                data: data,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {

                
				deferred.resolve(data);
                $ionicLoading.hide();
            }).error(function (data, status, headers, config) {
                    console.log("error");
                    $ionicPopup.alert({
					     title: 'Erreur',
					     template: 'Comment error'
					   });
					deferred.reject();
                    $ionicLoading.hide();
                });
            return deferred.promise;
		}

		function bookmarkThread(data){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: appConfig.url + '/thread/bookmarkThread',
                data: data,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {

                
				deferred.resolve(data);
                $ionicLoading.hide();
            }).error(function (data, status, headers, config) {
                    console.log("error");
                    $ionicPopup.alert({
					     title: 'Erreur',
					     template: 'Comment error'
					   });
					deferred.reject();
                    $ionicLoading.hide();
                });
            return deferred.promise;
		}

		function noteThread(data){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: appConfig.url + '/thread/noteThread',
                data: data,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {

                
				deferred.resolve(data);
                $ionicLoading.hide();
            }).error(function (data, status, headers, config) {
                    console.log("error");
                    $ionicPopup.alert({
					     title: 'Erreur',
					     template: 'Comment error'
					   });
					deferred.reject();
                    $ionicLoading.hide();
                });
            return deferred.promise;
		}
		
		function getCountryTags(){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			
			$http.get(appConfig.url + '/forum/getCountryTags')
			.success(function(data){
				deferred.resolve(data);
				$ionicLoading.hide();
			})
			.error(function(){
				console.log("error getting country");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}


		function getModuleTags(){
			var deferred = $q.defer();

			$ionicLoading.show({template: "Loading..."});

			$http.get(appConfig.url + '/forum/getModuleTags')
			.success(function(data){
				deferred.resolve(data);
				$ionicLoading.hide();
			})
			.error(function(){
				console.log("error getting module");
				$ionicLoading.hide();
				deferred.reject();
			});
			return deferred.promise;
		}
		
		function createThread(threadContent){
			var deferred = $q.defer();
			$ionicLoading.show({template: "Loading..."});
			$http({
                method: 'POST',
                url: appConfig.url + '/thread/createThread',
                data: threadContent,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {

                
                $ionicLoading.hide();
				deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                    console.log("error");
                    $ionicPopup.alert({
					     title: 'Erreur',
					     template: 'Erreur lors de la création de l\'article'
					   });
                    $ionicLoading.hide();
					deferred.reject();
                });
            return deferred.promise;
		}

		

		return {
			commentThread: commentThread,
			getCountryTags: getCountryTags,
			getModuleTags: getModuleTags,
			createThread: createThread,
			likeThread: likeThread,
			dislikeThread: dislikeThread,
			bookmarkThread: bookmarkThread,
			noteThread: noteThread
		};
	}
})();