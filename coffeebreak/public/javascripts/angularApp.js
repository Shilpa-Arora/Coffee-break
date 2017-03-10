// JavaScript Document
var coffeeApp = angular.module('coffeeApp', ['ui.router','ngAnimate']);

//config block, inject services that are part of ui.router module
coffeeApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('categories', {  //name of the state
		url: '/categories', //url in address bar for app
		templateUrl: 'views/list.html', //what template to load
		controller: 'MainCtrl'		//what controller to load
		})
	.state('details', {
		url: '/details/{id}',
		templateUrl: 'views/details.html',
		controller: 'DetailCtrl'
	})
	.state('list', {
		url: '/list/{id}',
		templateUrl: 'views/listItems.html',
		controller: 'ItemsCtrl'
	});
		
	//second state for details page, get rid of the semi colon, line 11.
	$urlRouterProvider.otherwise('/categories');			
	}]);
	
coffeeApp.controller('MainCtrl', ['$scope','$http', function($scope, $http){
	$http.get('/api/Categories').then(function(categories){
		console.log(categories.data);
		$scope.categories = categories.data;
		});	
	}]);

coffeeApp.controller('DetailCtrl', function($scope, $http, $stateParams) {
	console.log($stateParams.id);
	$http.get('/api/Beverage/' + $stateParams.id)
	     .then(function(beverage) {
	     	console.log(beverage.data);
	     	$scope.beverage = beverage.data;
		})
});	

coffeeApp.controller('ItemsCtrl', function($scope, $http, $stateParams) {
	console.log($stateParams.id);
	$http.get('/api/Beverages/' + $stateParams.id)
	     .then(function(beverages) {
	     	console.log(beverages.data);
	     	$scope.beverages = beverages.data;
		})
	   

});	