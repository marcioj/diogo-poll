angular.module('poll', []);

function PollList ($scope, $http) {
	$http({method: 'GET', url: '/polls.json'}).
		success(function(polls, status, headers, config) {
    	$scope.all = polls;  
    }).
    error(function(data, status, headers, config) {
    		$scope.output('Houve um erro ao carregar os dados da enquete!');
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
	      	alert('Ops :( Houve um erro durante a votação! Tente mais tarde.');
			});
	}

	$scope.selectedHandler = function(poll) {
		$scope.selected = poll;
	}

	$scope.output = function(mensagem) {
		$scope.log(mensagem);
	}
}