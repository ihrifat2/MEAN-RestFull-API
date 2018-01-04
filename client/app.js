var bookApp = angular.module('bookApp', ['ngRoute']);

bookApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'bookController',
		templateUrl: 'views/books.html'
	})
	.when('/books', {
		controller: 'bookController',
		templateUrl: 'views/books.html'
	})
	.when('/books/details/:id', {
		controller: 'bookController',
		templateUrl: 'views/book_details.html'
	})
	.when('/books/add', {
		controller: 'bookController',
		templateUrl: 'views/add_book.html'
	})
	.when('/books/edit/:id', {
		controller: 'bookController',
		templateUrl: 'views/edit_book.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});