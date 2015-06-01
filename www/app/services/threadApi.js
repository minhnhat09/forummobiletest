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
                url: 'http://localhost:9000/forum/api/thread/likeThread',
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
                url: 'http://localhost:9000/forum/api/thread/dislikeThread',
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
                url: 'http://localhost:9000/forum/api/thread/bookmarkThread',
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
                url: 'http://localhost:9000/forum/api/thread/noteThread',
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
			
			$http.get('http://localhost:9000/forum/api/forum/getCountryTags')
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

			$http.get('http://localhost:9000/forum/api/forum/getModuleTags')
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
                url: 'http://localhost:9000/forum/api/thread/createThread',
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