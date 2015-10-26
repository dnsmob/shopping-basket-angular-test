(function () {

	angular.module ('app.shopping').directive ('productList', function () {
		return {
			restrict : 'E',
			templateUrl : 'templates/product-list.html',
			controller: 'ProductListController'
		}
	});
}) ();