(function () {

	angular.module ('app.shopping').directive ('basket', function () {
		return {
			restrict : 'E',
			controller: 'BasketController'
		}
	});
}) ();