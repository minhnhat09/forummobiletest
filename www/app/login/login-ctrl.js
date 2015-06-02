(function () {
    'use strict';

    angular.module('eliteApp')
        .controller('LoginCtrl', ['$http','$location', '$ionicPopup', '$rootScope', 'forumApi', '$scope', 'mainApi', '$state', LoginCtrl]);

    function LoginCtrl($http, $location, $ionicPopup, $rootScope, forumApi, $scope, mainApi, $state) {
        var vm = this;
        
        vm.login = function (user) {
            mainApi.login(user).then(function(data){
                console.log("userName: " + data);
                forumApi.setCurrentUser(data);
                $rootScope.currentUser = data;
                console.log($rootScope);
                $state.go("home.forums");
            });
        }

    }
})();