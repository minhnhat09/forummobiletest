(function(){
    'use strict';
    
    angular.module('eliteApp')
    .controller('DemandCodeCtrl', ['mainApi', DemandCodeCtrl]);

    function DemandCodeCtrl(mainApi){
        var vm = this;
        vm.demandCode = function(user){
            mainApi.demandCode(user).then(function(data){
                $state.go("login");
            });
        }
    }
})();