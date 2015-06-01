(function(){
    'use strict';
    
    angular.module('eliteApp')
    .controller('DemandCodeCtrl', ['mainApi','$state', DemandCodeCtrl]);

    function DemandCodeCtrl(mainApi, $state){
        var vm = this;
        vm.demandCode = function(user){
            mainApi.demandCode(user).then(function(data){
                $state.go("login");
            });
        }
    }
})();