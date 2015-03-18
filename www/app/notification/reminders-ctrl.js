(function(){
	'use strict';
	angular.module('eliteApp')
	.controller('ReminderCtrl', ['$state', 'notisApi', ReminderCtrl]);

	function ReminderCtrl($state, notisApi){
		
		var vm  = this;
		notisApi.getNotisByCurrentUser().then(function(data){
			vm.notis = data;
			console.log("Reminders " + data);
		});

		
	}
})();