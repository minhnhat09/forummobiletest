(function () {
    'use strict';

    angular.module('eliteApp')
        .controller('ForumDetailCtrl', ['$state', 'eliteApi', ForumDetailCtrl]);

    function ForumDetailCtrl($state, eliteApi) {
        var vm = this;

        eliteApi.getThreads().then(function (data) {
            vm.threads = data;
            console.log(data);
            console.log(vm.thread.threadName);

        });


    }
})();