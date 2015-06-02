(function (){
	'use strict';
	angular.module('eliteApp')
	.controller('ForumsCtrl', ['$scope', '$state', '$rootScope', 'forumApi', ForumsCtrl]);

	function ForumsCtrl($scope, $rootScope, $state, forumApi){
		var vm = this;
		console.log(forumApi);
		console.log("Page forum, current user is " + forumApi.getCurrentUser());

		console.log("rootScope: " + $rootScope.currentUser);
		console.log($rootScope);

		forumApi.getServices().then(function (data){
			vm.services = data;
			console.log(data);
		});

		vm.selectForum = function(id){
			forumApi.setForumId(id);
			$state.go("app.forum-detail");
		}
	}
})();