'use strict';

angular.module('tiketApp',['ngResource', 'ui.bootstrap'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/flight', {
				templateUrl: 'partials/flight.html',
				controller: 'FlightCtrl'
			})
			.when('/hotel', {
				templateUrl: 'partials/hotel.html',
				controller: 'HotelCtrl'
			})
			.when('/cart', {
				templateUrl: 'partials/cart.html',
				controller: 'CartCtrl'
			})
			.when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'AboutCtrl'
			})
			.otherwise({
				redirectTo: '/flight'
			});
	}], ['$httpProvider', function($httpProvider){
		$httpProvider.defaults.headers.common['User-Agent'] = '('+businessId+')';
	}]);