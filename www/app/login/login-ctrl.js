(function () {
    'use strict';

    angular.module('eliteApp')
        .controller('LoginCtrl', ['$http','$location', '$ionicPopup', '$rootScope', 'forumApi', '$scope', 'mainApi', '$state', LoginCtrl]);

    function LoginCtrl($http, $location, $ionicPopup, $rootScope, forumApi, $scope, mainApi, $state) {
        var vm = this;
        
        vm.login = function (user) {
            mainApi.login(user).then(function(data){
                
                $state.go("home.forums");
            });
        }

    }
})();