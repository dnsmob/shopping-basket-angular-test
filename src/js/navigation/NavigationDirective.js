(function () {

	angular.module ('app.shopping').directive ('navigation', function () {
		return {
			restrict : 'E',
			templateUrl : 'templates/navigation.html',
			controller: 'NavigationController'
		}
	});
}) ();