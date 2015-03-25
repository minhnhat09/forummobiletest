(function (){
	'use strict';
	angular.module('eliteApp')
	.controller('CreateThreadCtrl', ['$scope', '$http', '$ionicLoading', '$state', 'forumApi','threadApi', CreateThreadCtrl]);

	function CreateThreadCtrl ($scope, $http, $ionicLoading, $state, forumApi, threadApi) {
		var vm = this;
		console.log("Forum create thread " + forumApi.getForumId());
		
		threadApi.getCountryTags().then(
			function(data){
				vm.countryTags = data;
			});

		threadApi.getModuleTags().then(
			function(data){
				vm.moduleTags = data;
			});

		vm.createThread = function(threadContent){
			
			threadContent["currentForumId"] = forumApi.getForumId();

			console.log(threadContent);
			
			threadApi.createThread(threadContent).then(function(data){
				$state.go("app.forum-detail");
			});
		} 
	}
})();