var myModule = angular.module("myModule", [
	"ngRoute"
	]);

myModule.controller('blog', function($scope){
	$scope.blogPosts = [
		{"name": "Jim", "title": "Random Title", "content": "This is some content."},
		{"name": "Terry", "title": "First Post", "content": "This is my awesome first post."},
		{"name": "Sally", "title": "New Haircut", "content": "My new hair cut is AmAZING!@!!!! ( ͡° ͜ʖ ͡°)"},
	];

	$scope.productOrder = "name"; // Set Initial Order

	$scope.changeOrder = function(theOrder) {
		$scope.productOrder = theOrder;
	};
});

myModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/blog', {
			templateUrl: 'partials/blog.html',
		}).
		when('/about', {
			templateUrl: 'partials/about.html',
		}).
		when('/contact', {
			templateUrl: 'partials/contact.html',
		}).
		otherwise({
			redirectTo: '/blog'
		});
}]);