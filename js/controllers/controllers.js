'use strict';

function MainCtrl($rootScope, $scope, $resource, $location, Gettoken) {
	$rootScope.footMenu = '';
	$scope.theToken = Gettoken.get(function(tokenData){
		$scope.loaded = true;
		return tokenData.token;
	});
}

function FlightCtrl($rootScope, $scope, $resource, $location, $routeParams) {
	$rootScope.activeNavitem = 'flightMenu';
	$rootScope.footMenu = 'visible';
	$scope.select = '';
	$scope.master = {
		flocation: '',
		tlocation: '',
		date: '',
		ret_date: '',
		adult: 1,
		child: 0,
		infant: 0
	};

	console.log( $routeParams.token );

	$scope.flight = $scope.master;
	var flocation = $scope.flight.flocation,
			tlocation = $scope.flight.tlocation,
			date = $scope.flight.date,
			ret_date = $scope.flight.ret_date,
			adult = $scope.flight.adult,
			child = $scope.flight.child,
			infant = $scope.flight.infant;

	$scope.getAirports = $resource(apiUrl+'flight_api/:action',
		{
			action:'all_airport',
			token: $routeParams.token,
			output:'json',
			callback:'JSON_CALLBACK'
		},
		{get:{method:'GET'}}
	);

	$scope.listAirport = $scope.getAirports.get(function(data){
		console.log($scope.listAirport);
		$scope.loaded = true;
	});

	$scope.listFlight = function(flight){
		$location.path('/flightresult');
		$location.search({
			d: $scope.flight.flocation,
			a: $scope.flight.tlocation,
			date: $scope.flight.date,
			ret_date: $scope.flight.ret_date,
			adult: $scope.flight.adult,
			child: $scope.flight.child,
			infant: $scope.flight.infant,
			token: $routeParams.token
		});
	};

}

function SpecialslfCtrl($scope) {
	$scope.revealfSelect = function() {
		$scope.select = 'visible';
	};
	$scope.selectfItem = function(fcode) {
		$scope.select = '';
		$scope.flight.flocation = fcode;
	};
}

function SpecialsltCtrl($scope) {
	$scope.revealtSelect = function() {
		$scope.select = 'visible';
	};
	$scope.selecttItem = function(tcode) {
		$scope.select = '';
		$scope.flight.tlocation = tcode;
	};
}

function FlightResultCtrl($rootScope, $scope, $resource, $routeParams, $location, $route) {
	$rootScope.activeNavitem = 'flightMenu';
	$rootScope.footMenu = '';
		$scope.getFlight = $resource(apiUrl+'search/:action',
			{
				action:'flight',
				d:$routeParams.d,
				a:$routeParams.a,
				date:$routeParams.date,
				ret_date:$routeParams.ret_date,
				adult:$routeParams.adult,
				child:$routeParams.child,
				infant:$routeParams.infant,
				token:$routeParams.token,
				v:'1',
				output:'json',
				callback:'JSON_CALLBACK'
			},
			{get:{method:'GET', isArray:false}}
		);
		$scope.resultFlight = $scope.getFlight.get(function(result){
			$scope.loaded = true;
			console.log($scope.resultFlight);
		});
		$scope.detail = function(flight_id){
			$location.path('/flightdetail');
			$location.search({
				flight: flight_id,
				token: $routeParams.token
			});
		};
}

function FlightDetailCtrl($rootScope, $scope, $resource, $routeParams) {
	$rootScope.activeNavitem = 'flightMenu';
	$rootScope.footMenu = '';
	$scope.getDetail = $resource(apiUrl+'flight_api/:action',
		{
			action: 'get_flight_data',
			flight_id: $routeParams.flight,
			token: $routeParams.token,
			output: 'json',
			callback: 'JSON_CALLBACK'
		},
		{get:{method:'GET'}}
	);
	$scope.getdetailFlight = $scope.getDetail.get(function(detail){
		$scope.loaded = true;
		console.log($scope.getdetailFlight);
	});
}

function DateCtrl($scope) {
	$scope.newDate = function() {
		var inputDate = $scope.inputDate;
		var splitDate = inputDate.split('/');
		return [splitDate[2], splitDate[0], splitDate[1]].join('-');
	};
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

