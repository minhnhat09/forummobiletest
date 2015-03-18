(function(){
	'use strict';
	angular.module('eliteApp')
	.controller('BookmarkCtrl', ['$state', 'profileApi', 'forumApi', BookmarkCtrl]);

	function BookmarkCtrl($state, profileApi, forumApi){
		
		var vm  = this;
		profileApi.getBookmarksByCurrentUser().then(function(data){
			vm.bookmarks = data;
			console.log("Bookmarks " + data);
		});

		vm.selectThread = function(id){
            console.log('id: ' + id);
            forumApi.setThreadId(id);
            $state.go("app.thread");
        }
	}
})();