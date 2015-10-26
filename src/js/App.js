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
			.otherwise ({
			redirectTo : '/list/all'
		});
	});

	angular.module ('app.shopping').controller('MainController', [ '$scope', function ($scope) {

	} ]);
}) ();
