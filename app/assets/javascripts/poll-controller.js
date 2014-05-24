angular.module('poll', []);

function PollList ($scope, $http) {
	$http({method: 'GET', url: '/polls.json'}).
		success(function(polls, status, headers, config) {
    	$scope.all = polls;  
    }).
    error(function(data, status, headers, config) {
      	alert('Houve um erro ao carregar os dados da enquete!');
		});

	$scope.vote = function () {		
		if (!$scope.selected) {
			return alert('Selecione uma opção na enquete');
		}

		$http({method: 'PUT', url: '/polls/' + $scope.selected.id + '/vote', headers: { 'Content-type': 'application/json'}}).
			success(function(polls, status, headers, config) {
	    	$scope.all = polls;  
	    	alert('Obrigado por votar!');
	    }).
	    error(function(data, status, headers, config) {
	      	alert(':( Houve um erro durante o processo e seu voto não foi processado.');
			});
	}

	$scope.selectedHandler = function(poll) {
		$scope.selected = poll;
	}
}