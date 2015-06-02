(function(){
	'use strict';
	angular.module('eliteApp')
	.controller('ReminderCtrl', ['$state', 'notisApi','forumApi', ReminderCtrl]);

	function ReminderCtrl($state, notisApi, forumApi){
		
		var vm  = this;
		notisApi.getNotisByCurrentUser().then(function(data){
			vm.notis = data;
			console.log("Reminders " + data);
		});

		vm.selectThread = function(id){
            console.log('idThread from Reminders: ' + id);
            forumApi.setThreadId(id);
            $state.go("app.thread");
        }
		
	}
})();