angular.module('poll', []);

function PollList ($scope) {
	$scope.all = [
		{text: '40 anos de vida sem envelhecimento', done: false},
		{text: 'R$ 2 milhoões', done: true}
	],
	$scope.vote = function () {
		$scope.all.push({text: $scope.todoText, done: false});
	}
}