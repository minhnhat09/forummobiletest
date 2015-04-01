(function (){
	'use strict';
	angular.module('eliteApp')
	.controller('SendMessageCtrl', ['$state', 'notisApi', SendMessageCtrl]);

	function SendMessageCtrl ($state, notisApi) {
		var vm = this;
		
		vm.sendMessage = function(message){
			
	notisApi.sendMessage(message).then(function(data){
				$state.go("app.messages");
			});
		} 
	}
})();