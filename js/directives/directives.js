TiketApp.directive('backButton', function(){
	return {
		restrict: 'E',
		template: '<span class="top-button left" ng-click="backbutton()"><i class="icon-arrow-left"></i></span>',
		controller: function($scope) {
			$scope.backbutton = function(){
				window.history.back();
			};
		},
		replace: true
	};
});

TiketApp.directive('reloadButton', function(){
	return {
		restrict: 'E',
		template: '<span class="top-button right" ng-click="reloadbutton()"><i class="icon-refresh"></i></span>',
		controller: function($scope, $route) {
			$scope.reloadbutton = function(){
				$route.reload();
			};
		},
		replace: true
	};
});

TiketApp.directive('preloader', function(){
	return {
		restrict: 'E',
		template: '<span class="preloader"><i class="icon-rotate-right"></i></span>',
		replace: true
	};
});