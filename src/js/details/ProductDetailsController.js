(function () {

	angular.module ('app.shopping').controller ('ProductDetailsController', [ '$scope', '$routeParams', 'ProductListModel', function ($scope, $routeParams, ProductListModel) {

		$scope.product = ProductListModel.getProductDetails ($routeParams.id);

	} ]);
}) ();