(function () {
    'use strict';

    angular.module('eliteApp')
    .controller('LogoutCtrl', ['$http','$location', '$ionicPopup', '$rootScope', 'forumApi', '$scope', 'mainApi', '$state', '$localstorage', LogoutCtrl]);

    function LogoutCtrl($http, $location, $ionicPopup, $rootScope, forumApi, $scope, mainApi, $state, $localstorage) {
        var vm = this;
        
        
        $localstorage.setObject('userForum', null);
        forumApi.setCurrentUser(null);
        

        vm.login = function (user) {
            mainApi.login(user).then(function(data){
                $localstorage.setObject('userForum', user);
                forumApi.setCurrentUser(user);
                var userForum = $localstorage.getObject('userForum');
                console.log(userForum);
                $state.go("home.forums");
            });
        }

    }
})();