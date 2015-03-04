(function () {
    'use strict';

    angular.module('eliteApp')
    .controller('ThreadCtrl', ['$state','$scope', '$ionicActionSheet', 'forumApi', ThreadCtrl]);

    function ThreadCtrl($state, $scope, $ionicActionSheet, forumApi) {
        var vm = this;

        var data = forumApi.getThreadById().then(function(data){
          vm.thread = data;
          console.log(data);
        });

        console.log("fsdq:" + data.idThread);
        
       

        $scope.bookmark = function(){
          console.log('bookmark');
        };

        vm.commentThread = function(id){
            forumApi.setThreadId(id);
            $state.go("app.comment");
            

        };

        
        
        $scope.createContact = function(u) {        
          $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
          $scope.modal.hide();
        };


        $scope.like = function(idThread){
          


        };

        $scope.dislike = function(){
          console.log('dislike');
        };


        $scope.showShareForm = function() {
          
          $ionicActionSheet.show({
            titleText: 'Share',
            buttons: [
              { text: 'Facebook <i class="icon ion-social-facebook-outline"></i>' },
              { text: 'Linkedin <i class="icon ion-social-linkedin-outline"></i>' },
              { text: 'Google <i class="icon ion-social-googleplus-outline"></i>' },
              { text: 'Twitter <i class="icon ion-social-twitter-outline"></i>' },
              { text: 'Mail <i class="icon ion-ios7-email-outline"></i>' },
            ],
            //destructiveText: 'Delete',
            cancelText: 'Cancel',
            cancel: function() {
              console.log('CANCELLED');
            },
            buttonClicked: function(index) {
              console.log('BUTTON CLICKED', index);
              return true;
            },
            destructiveButtonClicked: function() {
              console.log('DESTRUCT');
              return true;
            }
          });
        };


      $scope.showNoteForm = function() {
        
        $ionicActionSheet.show({
          titleText: 'Noter',
          buttons: [
            { text: '1' },
            { text: '2' },
            { text: '3' },
            { text: '4' },
            { text: '5' },
            
          ],
          
          cancelText: 'Cancel',
          cancel: function() {
            console.log('CANCELLED');
          },
          buttonClicked: function(index) {
            console.log('BUTTON CLICKED', index);
            return true;
          },
          destructiveButtonClicked: function() {
            console.log('DESTRUCT');
            return true;
          }
        });
      };



    };
})();