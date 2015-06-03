(function (){
	'use strict';
	angular.module('eliteApp')
	.controller('NotisCtrl', ['$scope', '$state', 'forumApi', NotisCtrl]);

	function NotisCtrl($scope, $state, forumApi){

		var vm = this;
		console.log(forumApi);
		console.log("Page notis, current user is " + forumApi.getCurrentUser());
		
		vm.selectForum = function(id){
			forumApi.setForumId(id);
			$state.go("app.forum-detail");
		}
	}
})();