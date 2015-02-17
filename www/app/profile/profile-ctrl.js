(function(){
	'use strict';
	angular.module('eliteApp')
	.controller('ProfileCtrl', ['forumApi', ProfileCtrl]);

	function ProfileCtrl(forumApi){
		var vm  = this;
		console.log("currentUser " + forumApi.currentUser);
		forumApi.getUserById().then(function(data){
			vm.user = data;
			console.log("data user " + data);
		});
	}
})();