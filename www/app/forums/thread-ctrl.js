(function () {
    'use strict';

    angular.module('eliteApp')
    .controller('ThreadCtrl', ['$state','$scope', '$ionicActionSheet', '$sce', 'forumApi', 'threadApi', ThreadCtrl]);

    function ThreadCtrl($state, $scope, $ionicActionSheet, $sce, forumApi, threadApi) {
        var vm = this;

        var data = forumApi.getThreadById().then(function(data){
          vm.thread = data;
          for(var i=0; i < vm.thread.posts.length; i++){
            vm.thread.posts[i].postContent = $sce.trustAsHtml(vm.thread.posts[i].postContent);
          }
          console.log(data);
        });

        vm.commentThread = function(id){
            forumApi.setThreadId(id);
            console.log("Thread id in thread: " + id);
            $state.go("app.comment");
        };

        vm.like = function(id){
          console.log("idThread " + id);
          var data = {};
          data['currentThreadId'] = id;
          
          threadApi.likeThread(data);

        };

        vm.showShareForm = function(id) {
          
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

        vm.createContact = function(u) {        
          $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
          $scope.modal.hide();
        };

        
       

        vm.bookmark = function(id){
          console.log('bookmark');
          var data = {};
          data['currentThreadId'] = id;
          
          threadApi.bookmarkThread(data);

        };

        


        

        vm.dislike = function(id){
          console.log('dislike');
          var data = {};
          data['currentThreadId'] = id;
          
          threadApi.dislikeThread(data);
        };


        


      vm.showNoteForm = function(id) {
        
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
            console.log('BUTTON CLICKED', index + 1);
            var data = {};
            data['currentThreadId'] = id;
            data['note'] = index + 1;
            threadApi.noteThread(data);
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