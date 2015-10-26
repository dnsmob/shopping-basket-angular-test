(function () {

	angular.module ('app.shopping').directive ('productDetails', function () {
		return {
			restrict : 'E',
			//templateUrl : 'templates/product-list.html',
			controller: 'ProductDetailsController'
		}
	});
}) ();