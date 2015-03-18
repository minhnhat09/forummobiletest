(function(){
	'use strict';
	angular.module('eliteApp')
	.controller('GiftCtrl', ['profileApi', GiftCtrl]);

	function GiftCtrl(profileApi){
		var vm  = this;
		profileApi.getGiftsByCurrentUser().then(function(data){
			vm.gifts = data;
			console.log("data gifts " + data);
		});
	}
})();