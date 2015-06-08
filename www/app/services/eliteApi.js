(function () {
    'use strict';

    angular.module('eliteApp').factory('eliteApi', ['$http', '$q', '$ionicLoading', '$timeout', 'appConfig', eliteApi]);

    function eliteApi($http, $q, $ionicLoading, $timeout, appConfig) {
        var currentLeagueId;

        function getThreads(){
            var deffered = $q.defer();
            $http.get(appConfig.url + "/findThreads")
                .success(function (data) {
                    deffered.resolve(data);
                })
                .error(function () {
                    console.log("Error while making http call");
                    deffered.reject();
                });
            return deffered.promise;
        }

        function getLeagues(){
            var deffered = $q.defer();
            $http.get("http://elite-schedule.net/api/leaguedata")
                .success(function (data) {
                    deffered.resolve(data);
                })
                .error(function () {
                    console.log("Error while making http call");
                    deffered.reject();
                });
            return deffered.promise;
        }

        function getLeagueData(){
            var deferred = $q.defer();
            $ionicLoading.show({template: "Loading..."});
            $http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
                .success(function (data, status) {
                    console.log("Received schedule data via http ", data, status);
                    $timeout(function () {
                        $ionicLoading.hide();
                        deferred.resolve(data);
                    }, 3000);
                })
                .error(function () {
                    console.log("Error while making http call");
                    $ionicLoading.hide();
                    deferred.reject();
                });
            return deferred.promise;
        }

        function setLeagueId(leagueId){
            currentLeagueId = leagueId;
        }

        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData,
            getThreads:getThreads,
            setLeagueId:setLeagueId
        };
    }
})();