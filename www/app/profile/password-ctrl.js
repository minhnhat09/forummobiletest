(function (){
	'use strict';
	angular.module('eliteApp')
	.controller('PasswordCtrl', ['$scope', '$http', '$ionicLoading', '$state', 'profileApi', PasswordCtrl]);

	function PasswordCtrl ($scope, $http, $ionicLoading, $state, profileApi) {
		var vm = this;
		
		
		vm.changePassword = function(password){
			
			console.log(password);
			
			profileApi.changePassword(password).then(function(data){
				$state.go("login");
			});
		} 
	}
})();