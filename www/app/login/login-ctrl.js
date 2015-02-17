(function () {
    'use strict';

    angular.module('eliteApp')
        .controller('LoginCtrl', ['$http','$location', '$ionicPopup', '$rootScope', 'forumApi', '$state', LoginCtrl]);

    function LoginCtrl($http, $location, $ionicPopup, $rootScope, $state, forumApi) {
        var vm = this;
        
        console.log("login controller");
        console.log(forumApi);
        vm.login = function (user) {

            $http({
                method: 'POST',
                url: 'http://localhost:9000/forum/api/authenticate ',
                data: user,
                headers: {'Content-Type': 'application/json'}
            }).success(function (data, status, headers, config) {
                console.log(data);
                forumApi.currentUser = data;
                
                //forumApi.setCurrentUser(data);
                console.log("forum " + forumApi.currentUser);
                //forumApi.setCurrentUser(data);
                $location.path('/home/forums');
                //$state.go("home.forums");
                /*console.log(data);
                forumApi.setCurrentUser = data;
                console.log(forum.getCurrentUser);*/
                
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