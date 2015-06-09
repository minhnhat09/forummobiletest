(function () {
    'use strict';

    angular.module('eliteApp')
    .controller('ThreadCtrl', ['$state','$scope', '$ionicActionSheet', '$ionicPopup', '$sce', 'forumApi', 'threadApi', '$cordovaSocialSharing', 'appConfig', ThreadCtrl]);

    function ThreadCtrl($state, $scope, $ionicActionSheet, $ionicPopup, $sce, forumApi, threadApi, $cordovaSocialSharing, appConfig) {
        var vm = this;
        vm.apiHost = appConfig.apiHost;
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
          
          $cordovaSocialSharing.share(vm.thread.content, vm.thread.threadName, null, null) // Share via native share sheet
          .then(function(result) {
            // Success!
            console.log("idThread " + id);
          }, function(err) {
            // An error occured. Show a message to the user
            $ionicPopup.alert({
              title: 'Erreur',
              template: 'Une erreur est survenue...'
            });
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