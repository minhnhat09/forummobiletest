(function () {
    'use strict';

    angular.module('eliteApp')
        .controller('ForumDetailCtrl', ['$state', '$scope', '$ionicModal', 'forumApi', ForumDetailCtrl]);

    function ForumDetailCtrl($state, $scope, $ionicModal, forumApi) {
        var vm = this;

        forumApi.getThreadsByForumId().then(function (data) {
            vm.threads = data;
            
        });

        forumApi.getForumById().then(function (data) {
            vm.forum = data;
            
        });

        vm.createThread = function(){
          forumApi.setForumId(vm.forum.idApp);

          console.log("day qua " + vm.forum.idApp);
          $state.go("app.create-thread");
        }

        vm.selectThread = function(id){
            console.log('id: ' + id);
            forumApi.setThreadId(id);
            $state.go("app.thread");
        }

        $ionicModal.fromTemplateUrl('presentation.html', {
            scope: $scope,
            animation: 'slide-in-up',
            focusFirstInput:true
          }).then(function(modal) {
            $scope.modal = modal;
          });

        


          $scope.openModal = function() {
            $scope.modal.show();
          };

          $scope.closeModal = function() {
            $scope.modal.hide();
            //$scope.modal.remove();
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

    }
})();