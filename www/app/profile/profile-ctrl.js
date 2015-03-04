(function(){
	'use strict';
	angular.module('eliteApp')
	.controller('ProfileCtrl', ['forumApi', ProfileCtrl]);

	function ProfileCtrl(forumApi){
		var vm  = this;
		forumApi.getUserInfo().then(function(data){
			vm.user = data;
			console.log("data user " + data);
		});
	}
})();