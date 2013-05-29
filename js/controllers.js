'use strict';

function FlightCtrl($rootScope, $scope, $resource) {
	$rootScope.activeNavitem = 'flightMenu';
	$scope.getToken = $resource(apiUrl+'apiv1/:action',
		{action:'payexpress', method:'getToken', output:'json', secretkey:secret, callback:'JSON_CALLBACK'},
		{get:{method:'GET'}}
	);
	var thisToken = $scope.getToken.get(
		function(data) {
			$scope.getFlight = $resource(apiUrl+'flight_api/:action',
				{action:'all_airport', token: data.token, output:'json', callback:'JSON_CALLBACK'},
				{get:{method:'GET'}}
			);
			$scope.listAirport = $scope.getFlight.get(function(data){
				console.log(data.all_airport);
				$scope.loaded = true;
			});
		});
}

function HotelCtrl($rootScope, $scope) {
	$rootScope.activeNavitem = 'hotelMenu';
	$scope.a = 'test hotel';
}

function CartCtrl($rootScope, $scope) {
	$rootScope.activeNavitem = 'cartMenu';
	$scope.b = 'test cart';
}

function AboutCtrl($rootScope, $scope) {
	$rootScope.activeNavitem = 'aboutMenu';
}