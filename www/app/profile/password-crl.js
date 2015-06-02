(function (){
	'use strict';
	angular.module('eliteApp')
	.controller('PasswordCtrl', ['$scope', '$http', '$ionicLoading', '$state', 'forumApi','threadApi', PasswordCtrl]);

	function PasswordCtrl ($scope, $http, $ionicLoading, $state, forumApi, threadApi) {
		var vm = this;
		console.log(forumApi.getThreadId());
		
		vm.commentThread = function(comment){
			comment["currentThreadId"] = forumApi.getThreadId();
			console.log(comment);
			
			threadApi.commentThread(comment).then(function(data){
				$state.go("app.thread");
			});
		} 
	}
})();