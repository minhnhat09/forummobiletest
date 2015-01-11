(function () {
    'use strict';

    angular.module('eliteApp')
    .controller('LeaguesCtrl', ['$state', 'eliteApi', LeaguesCtrl]);

    function LeaguesCtrl($state, eliteApi) {
        var vm = this;
        //var thread = eliteApi.getThread();
        //console.log(thread);


        eliteApi.getLeagues().then(function (data) {
            vm.leagues = data;
            console.log(data);
        });


        //var leagueData = eliteApi.getLeagueData();





        //vm.leagues = data;

        vm.selectLeague = function(id){
            eliteApi.setLeagueId(id);
            $state.go("app.teams");
        }

    };
})();