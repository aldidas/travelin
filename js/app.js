'use strict';

var TiketApp = angular.module('tiketApp', ['ngResource', 'ui.bootstrap']);

TiketApp.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'partials/main.html',
				controller: 'MainCtrl'
			})
			.when('/flight', {
				templateUrl: 'partials/flight.html',
				controller: 'FlightCtrl'
			})
			.when('/flightresult', {
				templateUrl: 'partials/flightresult.html',
				controller: 'FlightResultCtrl'
			})
			.when('/flightdetail', {
				templateUrl: 'partials/flightdetail.html',
				controller: 'FlightDetailCtrl'
			})
			.when('/hotel/detil?token=:theToken', {
				templateUrl: 'partials/hotel.html',
				controller: 'HotelCtrl'
			})
			.when('/cart/detil?token=:theToken', {
				templateUrl: 'partials/cart.html',
				controller: 'CartCtrl'
			})
			.when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'AboutCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}], ['$httpProvider', function($httpProvider){
		$httpProvider.defaults.headers.common['User-Agent'] = '('+businessId+')';
	}]);
