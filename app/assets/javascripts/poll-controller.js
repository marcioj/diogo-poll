angular.module('poll', []);

function PollList ($scope) {
	$.getJSON("/polls", function(polls) {
		$scope.all = polls;
		$scope.$apply();
	});

	$scope.vote = function () {
		if (!$scope.selected) {
			return alert('Selecione uma opção na enquete');
		}
		$.ajax('/polls/' + $scope.selected.id + '/vote', { type: 'PUT' }).then(function(polls) {
			$scope.all = polls;
			$scope.$apply();
			alert('Obrigado por votar');
		});
	}

	$scope.selectedHandler = function(poll) {
		$scope.selected = poll;
	}
}