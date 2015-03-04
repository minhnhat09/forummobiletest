(function () {
    'use strict';

    angular.module('eliteApp')
        .controller('ForumDetailCtrl', ['$state', 'forumApi', ForumDetailCtrl]);

    function ForumDetailCtrl($state, forumApi) {
        var vm = this;

        forumApi.getForumById().then(function (data) {
            vm.threads = data;
            console.log(data);
        });

        vm.selectThread = function(id){
            console.log('id: ' + id);
            forumApi.setThreadId(id);
            $state.go("app.thread");
        }

    }
})();