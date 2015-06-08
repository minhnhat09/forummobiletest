(function () {
    'use strict';

    angular.module('eliteApp')
    .controller('LoginCtrl', ['$http','$location', '$ionicPopup', '$rootScope', 'forumApi', '$scope', 'mainApi', '$state', '$localstorage', LoginCtrl]);

    function LoginCtrl($http, $location, $ionicPopup, $rootScope, forumApi, $scope, mainApi, $state, $localstorage) {
        var vm = this;
       
        var userForumLocal = $localstorage.getObject('userForum');
        if(userForumLocal!=null && !angular.equals({}, userForumLocal)){
             forumApi.setCurrentUser(userForumLocal);
             $state.go("home.forums");
        }

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