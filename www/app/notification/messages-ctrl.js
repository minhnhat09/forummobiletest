(function () {
    'use strict';
    angular.module('eliteApp')
    .controller('MessagesCtrl', ['$state','$scope','$http', '$ionicModal', 'notisApi','forumApi', MessagesCtrl]);

    function MessagesCtrl($state, $scope, $http, $ionicModal, notisApi, forumApi) {

    	var vm  = this;
		notisApi.getMessagesByCurrentUser().then(function(data){
			vm.messages = data;
			
			
			console.log("messages " + data);
		});

        $ionicModal.fromTemplateUrl('my-modal.html', {
        	scope: $scope,
    		animation: 'slide-in-up',
    		focusFirstInput:true
		  }).then(function(modal) {
		    $scope.modal = modal;
		  });


		  $scope.openModal = function(idMessage) {
		    $scope.modal.show();
		    for(var i=0; i < vm.messages.length; i++){
		    	var idMess = vm.messages[i].idMessage;
		    	var mesageContent = vm.messages[i].content;
		    	if(idMessage == idMess){
		    		$scope.modal.content = mesageContent;
		    	}
		    }
		    
		  };
		  $scope.closeModal = function() {
		    $scope.modal.hide();
		  };
		  //Cleanup the modal when we're done with it!
		  $scope.$on('$destroy', function() {
		    $scope.modal.remove();
		  });
		  // Execute action on hide modal
		  $scope.$on('modal.hidden', function() {
		    // Execute action
		  });
		  // Execute action on remove modal
		  $scope.$on('modal.removed', function() {
		    // Execute action
		 });

		  
    };
})();