(function (){
	'use strict';
	angular.module('eliteApp')
	.controller('NotisCtrl', ['$scope', '$state', 'forumApi', 'notisApi', NotisCtrl]);

	function NotisCtrl($scope, $state, forumApi, notisApi){

		var vm = this;
		console.log(forumApi);
		console.log("Page notis, current user is " + forumApi.getCurrentUser());

		notisApi.getNotisByCurrentUser().then(function(data){
			vm.notis = data;
			console.log("Reminders " + data);
		});

		notisApi.getMessagesByCurrentUser().then(function(data){
			vm.messages = data;
			console.log("messages " + data);
		});
		
	}
})();