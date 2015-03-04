(function () {
    'use strict';

    angular.module('eliteApp')
        .controller('LoginCtrl', ['$http','$location', '$ionicPopup', '$rootScope', 'forumApi', '$state', '$scope', LoginCtrl]);

    function LoginCtrl($http, $location, $ionicPopup, $rootScope, $state, forumApi, $scope) {
        var vm = this;
        console.log("login controller");
        console.log(forumApi);
        /*vm.login = forumApi.login($scope.user).then(function(data){
            console.log(data);
        });*/
        /*vm.login = function(user){
            console.log(user);
            forumApi.setThreadId(user);
            forumApi.login().then(function(data){
                console.log(data);
            });
        }*/
        vm.login = function (user) {

            $http({
                method: 'POST',
                url: 'http://localhost:9000/forum/api/authenticate',
                data: user,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                console.log(data);
                var user = data;
                //console.log(forumApi);
                //forumApi.setCurrentUser(user);
                //forumApi.setThreadId(user);
                //forumApi.setCurrentUser(data);
                //console.log("forum " + forumApi.getCurrentUser());
                //forumApi.setCurrentUser(data);
                $location.path('/home/forums');
                //$state.go("home.forums");
                //console.log(data);
                //forumApi.setCurrentUser = data;
                //console.log(forum.getCurrentUser);
                
            })
                .error(function (data, status, headers, config) {
                    console.log("error");
                    $ionicPopup.alert({
     title: 'Erreur',
     template: 'Nom d\'utilisateur ou mot de passe est incorrect'
   });
                });
        }

    }
})();