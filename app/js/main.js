var myModule = angular.module("myModule", [
	"ngRoute"
	]);

myModule.controller('myProducts', function($scope){
	$scope.products = [
		{"name": "Jim", "age": 27, "pic": "/img/bear.jpg"},
		{"name": "Bob", "age": 89, "pic": "/img/bear.jpg"},
		{"name": "Tim", "age": 55, "pic": "/img/bear.jpg"},
		{"name": "John", "age": 31, "pic": "/img/bear.jpg"},
		{"name": "Sally", "age": 15, "pic": "/img/bear.jpg"},
		{"name": "Jane", "age": 46, "pic": "/img/bear.jpg"}
	];

	$scope.productOrder = "name"; // Set Initial Order

	$scope.changeOrder = function(theOrder) {
		$scope.productOrder = theOrder;
	};
});

myModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/index', {
			templateUrl: '/partials/home.html',
		}).
		when('/about', {
			templateUrl: '/partials/about.html',
		}).
		when('/contact', {
			templateUrl: '/partials/contact.html',
		}).
		otherwise({
			redirectTo: '/index'
		});
}]);