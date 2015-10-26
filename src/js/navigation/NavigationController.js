(function () {

	angular.module ('app.shopping').controller ('NavigationController', [ '$scope', '$routeParams', 'NavigationModel', 'ProductListModel', function ($scope, $routeParams, NavigationModel, ProductListModel) {

		// show breadcrumbs if there is an id going about
		var category = ProductListModel.getProductDetails ($routeParams.id);
		$scope.categories = NavigationModel.getCategories (category ? category.type : null);

		//console.log ('nav scope', $routeParams.id, $scope.categories);

	} ]);
}) ();