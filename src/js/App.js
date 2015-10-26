'use strict';

(function () {

	angular.module ('app.shopping', [ 'ui.bootstrap', 'ngRoute', 'ngSanitize' ])

		.config (function ($routeProvider) {
		$routeProvider
			.when ('/list/:category', {
			templateUrl : 'pages/main.html'
		})
			.when ('/product-details/:id', {
			templateUrl : 'pages/product-details.html'
		})
			.when ('/basket', {
			templateUrl : 'pages/basket.html'
		})
			.when ('/delivery', {
			templateUrl : 'pages/delivery.html'
		})
			.otherwise ({
			redirectTo : '/list/all'
		});
	});


	angular.module ('app.shopping').controller ('MainController', [ '$scope', 'ProductListModel', function ($scope, ProductListModel) {

		$scope.purchased = {};
		$scope.totalPrice = 0;

		$scope.add = function (id) {
			if (typeof $scope.purchased[ id ] === 'undefined') {
				$scope.purchased[ id ] = {
					count : 0,
					details : ProductListModel.getProductDetails (id)
				};
			}
			$scope.purchased[ id ].count++;
		};

		$scope.remove = function (id) {
			if (typeof $scope.purchased[ id ] !== 'undefined' && $scope.purchased[ id ].count > 0) {
				$scope.purchased[ id ].count--;
			}

			if ($scope.purchased[ id ].count <= 0) {
				$scope.del (id);
			}
		};

		$scope.del = function (id) {
			delete $scope.purchased[ id ];
		};

		$scope.purchasedAsArray = function () {
			var arr = [];
			for (var key in $scope.purchased) {
				if ($scope.purchased.hasOwnProperty (key)) {
					arr.push ($scope.purchased[ key ]);
				}
			}
			return arr;
		};

		$scope.$watch ('purchased', function (newVal, oldVal) {
			if (!angular.equals (newVal, oldVal)) {
				calculateTotal ();
			}
		}, true);

		function calculateTotal () {
			$scope.totalPrice = 0;
			for (var key in $scope.purchased) {
				if ($scope.purchased.hasOwnProperty (key)) {
					var item = $scope.purchased [ key ];
					$scope.totalPrice += (item.details.price * item.count);
				}
			}
			console.log ($scope.totalPrice);
		}


	} ]);
}) ();
