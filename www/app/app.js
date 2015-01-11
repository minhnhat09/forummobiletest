angular.module("eliteApp", ["ionic"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
      abstract: true,
      url: "/home",
      templateUrl: "app/home/home.html"
    })

    .state('home.leagues', {
      url: "/leagues",
      views: {
        "tab-leagues": {
          templateUrl: "app/home/leagues.html"
        }
      }
    })

    .state('home.myteams', {
      url: "/myteams",
      views: {
        "tab-myteams": {
          templateUrl: "app/home/myteams.html"
        }
      }
    })

    .state('home.pageperso', {
      url: "/pageperso",
      views: {
        "tab-pageperso": {
          templateUrl: "app/home/pageperso.html"
        }
      }
    })

    .state('home.messages', {
      url: "/messages",
      views: {
        "tab-messages": {
          templateUrl: "app/home/messages.html"
        }
      }
    })

    

    

    .state('home.forums', {
      url: "/forums",
      views: {
        "tab-forums": {
          templateUrl: "app/home/forums.html"
        }
      }
    })

    .state('app', {
      abstract: true,
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    })

    .state('app.teams', {
      url: "/teams",
      views: {
        'mainContent': {
          templateUrl: "app/teams/teams.html"
        }
      }
    })

    .state('app.team-detail', {
      url: "/teams/:id",
      views: {
        'mainContent': {
          templateUrl: "app/teams/team-detail.html"
        }
      }
    })


    .state('app.profile-detail', {
      url: "/profile/profile-detail",
      views: {
        'mainContent': {
          templateUrl: "app/profile/profile-detail.html"
        }
      }
    })


    

    .state('app.password', {
      url: "/profile/password",
      views: {
        'mainContent': {
          templateUrl: "app/profile/password.html"
        }
      }
    })


    .state('app.bonus', {
      url: "/profile/bonus",
      views: {
        'mainContent': {
          templateUrl: "app/profile/bonus.html"
        }
      }
    })


    .state('app.gift', {
      url: "/profile/gift",
      views: {
        'mainContent': {
          templateUrl: "app/profile/gift.html"
        }
      }
    })


    .state('app.contact', {
      url: "/profile/contact",
      views: {
        'mainContent': {
          templateUrl: "app/profile/contact.html"
        }
      }
    })


    .state('app.bookmark', {
      url: "/profile/bookmark",
      views: {
        'mainContent': {
          templateUrl: "app/profile/bookmark.html"
        }
      }
    })


    .state('app.forum-detail', {
      url: "/forums/forum-detail",
      views: {
        'mainContent': {
          templateUrl: "app/forums/forum-detail.html"
        }
      }
    })

    //thread
    .state('app.thread', {
      url: "/forums/thread",
      views: {
        'mainContent': {
          templateUrl: "app/forums/thread.html"
        }
      }
    })




    .state('app.game', {
      url: "/game/:id",
      views: {
        'mainContent': {
          templateUrl: "app/game/game.html"
        }
      }
    })

    .state('app.standings', {
      url: "/standings",
      views: {
        'mainContent': {
          templateUrl: "app/standings/standings.html"
        }
      }
    })

    .state('app.locations', {
      url: "/locations",
      views: {
        'mainContent': {
          templateUrl: "app/locations/locations.html"
        }
      }
    })

    .state('app.rules', {
      url: "/rules",
      views: {
        'mainContent': {
          templateUrl: "app/rules/rules.html"
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/leagues');
});