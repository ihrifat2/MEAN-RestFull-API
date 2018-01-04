var bookApp = angular.module('bookApp');

bookApp.controller('bookController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
	console.log('BookController loaded...');

	$scope.getBooks = function(){
		$http.get('/api/books').then(function(response){
			$scope.books = response.data;
		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/books/'+id).then(function(response){
			$scope.book = response.data;
		});
	}

	$scope.addBook = function(){
		$http.post('/api/books/', $scope.book).then(function(response){
			window.location.href='#!/';
		});
	}

	$scope.editBook = function(){
		var id = $routeParams.id;
		$http.put('/api/books/'+id, $scope.book).then(function(response){
			window.location.href='#!/';
		});
	}

	$scope.deletebook = function(id){
		$http.delete('/api/books/'+id).then(function(response){
			window.location.href='#!/';
		});
	}
}])