(function(){
	'use strict';
	angular.module('eliteApp')
	.controller('ContactCtrl', ['profileApi', ContactCtrl]);

	function ContactCtrl(profileApi){
		var vm  = this;
		profileApi.getContactsByCurrentUser().then(function(data){
			vm.contacts = data;
			console.log("data Contacts " + data);
		});
	}
})();