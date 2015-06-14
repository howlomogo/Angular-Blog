var myModule = angular.module("myModule", [
	"ngRoute"
	]);

myModule.controller('blog', function($scope, $http){

	// Get the json blog post data

	$http.get("js/blogposts.json")
   .success(function(response) {
   	$scope.blogPosts = response.records;
   	console.log($scope.blogPosts);
   });
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