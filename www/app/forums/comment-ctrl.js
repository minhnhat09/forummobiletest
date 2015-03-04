(function (){
	'use strict';
	angular.module('eliteApp')
	.controller('CommentCtrl', ['$scope','forumApi', CommentCtrl]);

	function CommentCtrl ($scope, forumApi) {
		var vm = this;
		vm.commentThread = function(comment){
			forumApi.commentThread(comment).then(function(data){
				console.log(data);
			});
		}
	}
})();