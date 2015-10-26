(function () {

	angular.module ('app.shopping').factory ("NavigationModel", [ function () {

		var categories = [
			{name : 'All', type: 'all'},
			{name : 'MacBooks', type : 'macbook'},
			{name : 'MacBooks Air', type : 'air'},
			{name : 'MacBooks Pro', type : 'pro'},
			{name : 'iMacs', type : 'imac'},
			{name : 'Macs mini', type : 'mini'},
			{name : 'Macs Pro', type : 'macpro'}
		];

		function getCurrentCategories (type) {
			var item = getItemByType (type);
			if (item) {
				return [ {name : 'Home', type : 'all'}, item ];
			}
			return categories;
		}

		function getItemByType (type) {
			for (var count = 0, len = categories.length; count < len; ++count) {
				var item = categories[ count ];
				if (item.type == type) {
					return item;
				}
			}
			return null;
		}

		return {
			getCategories : getCurrentCategories
		};

	} ]);
}) ();



