(function () {

	angular.module ('app.shopping').controller ('ProductListController', [ '$scope', '$routeParams', 'ProductListModel', function ($scope, $routeParams, ProductListModel) {

		// show only selected products if there is a category going about
		$scope.products = ProductListModel.getProducts ($routeParams.category);

	} ]);
}) ();