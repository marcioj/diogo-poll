angular.module('poll', []);

function PollList ($scope) {
	$.getJSON("/polls", function(polls) {
		$scope.all = polls
		$scope.$apply()
	})

	$scope.vote = function () {
		
	}
}