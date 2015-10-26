(function () {

	angular.module ('app.shopping').factory ("ProductListModel", [ function () {

		var productDataList = [
			{
				id : 0,
				name : '<b>MacBook</b>',
				desc : '<ul class="list list-circle"> <li>12-inch (diagonal) LED-backlit Retina display </li> <li>1.1GHz, 1.2GHz or 1.3GHz dual-core Intel Core M processor<br>Turbo Boost up to 2.9GHz</li> <li>Up to 9 hours battery life<sup>1</sup> </li> <li>Up to 512GB flash storage<sup>2</sup> </li> <li>0.92 kg<sup>3</sup> </li> <li>Available in gold, silver and space grey </li> <li>The world’s most energy-efficient notebook<sup>4</sup> </li> </ul>',
				img : 'images/product_macbook_large.png',
				type : 'macbook'
			},

			{
				id : 1,
				name : '<b>MacBook Air 11-inch</b>',
				desc : '<ul class="list list-circle"> <li> 11.6-inch (diagonal) LED-backlit display</li> <li> 1.6GHz dual-core Intel Core i5 or 2.2GHz dual-core Intel Core i7 processor<br>Turbo Boost up to 3.2GHz</li> <li> Up to 9 hours battery life<sup>1</sup></li> <li> Up to 512GB flash storage<sup>2</sup></li> <li> 1.08 kg<sup>3</sup> </li> </ul>',
				img : 'images/product_macbook_air_11_large.png',
				type : 'air'
			},

			{
				id : 2,
				name : '<b>MacBook Air 13-inch</b>',
				desc : '<ul class="list list-circle"> <li>13.3-inch (diagonal) LED-backlit display</li> <li>1.6GHz dual-core Intel Core i5 or 2.2GHz dual-core Intel Core i7 processor<br>Turbo Boost up to 3.2GHz </li> <li>Up to 12 hours battery life<sup>1</sup> </li> <li>Up to 512GB flash storage<sup>2</sup> </li> <li>1.35 kg<sup>3</sup> </li> </ul>',
				img : 'images/product_macbook_air_13_large.png',
				type : 'air'
			},

			{
				id : 3,
				name : '<b>MacBook Pro 13-inch</b>',
				desc : '<ul class="list list-circle"> <li>13.3-inch (diagonal) LED-backlit display</li> <li>2.5GHz dual-core Intel Core i5 or 2.9GHz dual-core Intel Core i7 processor<br>Turbo Boost up to 3.6GHz</li> <li>Up to 7 hours battery life<sup>1</sup> </li> <li>Up to 1TB 5400-rpm hard drive; or up to 512GB solid-state drive<sup>2</sup> </li> <li>2.06 kg<sup>3</sup> </li> </ul>',
				img : 'images/product_macbook_pro_13_large.png',
				type : 'pro'
			},

			{
				id : 4,
				name : '<b>MacBook Pro 13-inch</b> with Retina display',
				desc : '<ul class="list list-circle"> <li>13.3-inch (diagonal) LED-backlit Retina display</li> <li>2.7GHz or 2.9GHz dual-core Intel Core i5 or 3.1GHz dual-core Intel Core i7 processor<br>Turbo Boost up to 3.4GHz</li> <li>Up to 10 hours battery life<sup>1</sup> </li> <li>Up to 1TB flash storage<sup>2</sup> </li> <li>1.58 kg<sup>3</sup> </li> </ul>',
				img : 'images/product_macbook_pro_retina_13_large.png',
				type : 'pro'
			},

			{
				id : 5,
				name : '<b>MacBook Pro 15-inch</b> with Retina display',
				desc : '<ul class="list list-circle"> <li>15.4-inch (diagonal) LED-backlit Retina display </li> <li>2.2GHz, 2.5GHz or 2.8GHz quad-core Intel Core i7 processor<br>Turbo Boost up to 4.0GHz </li> <li>Up to 9 hours battery life<sup>1</sup></li> <li>Up to 1TB flash storage<sup>2</sup> </li> <li>2.04 kg<sup>3</sup> </li> </ul>',
				img : 'images/product_macbook_pro_retina_15_large.png',
				type : 'pro'
			},

			{
				id : 6,
				name : '<b>iMac 21.5‑inch</b>',
				desc : '<ul class="list list-circle"> <li>21.5‑inch (diagonal) LED‑backlit display</li> <li>1.6GHz dual-core or 2.8GHz quad-core Intel Core&nbsp;i5 processor<br>Turbo Boost up to 3.3GHz</li> <li>1TB 5400‑rpm hard drive; 1TB or 2TB Fusion Drive; or 256GB flash storage (SSD)<sup>2</sup></li> <li>Apple&nbsp;Magic&nbsp;Keyboard and Magic&nbsp;Mouse&nbsp;2 or Magic&nbsp;Trackpad&nbsp;2</li> </ul>',
				img : 'images/product_imac_21_large.png',
				type : 'imac'
			},

			{
				id : 7,
				name : '<b>iMac 21.5‑inch</b> with Retina 4K display',
				desc : '<ul class="list list-circle"> <li>21.5‑inch (diagonal) LED‑backlit Retina 4K display</li> <li>3.1GHz quad-core Intel Core&nbsp;i5 or 3.3GHz quad-core Intel Core&nbsp;i7 processor<br>Turbo Boost up to 3.8GHz</li> <li>1TB 5400-rpm hard drive; 1TB or 2TB Fusion Drive; or up to 512GB flash storage (SSD)<sup>2</sup></li> <li>Apple&nbsp;Magic&nbsp;Keyboard and Magic&nbsp;Mouse&nbsp;2 or Magic&nbsp;Trackpad&nbsp;2</li> </ul>',
				img : 'images/product_imac_retina_21_large.png',
				type : 'imac'
			},

			{
				id : 8,
				name : '<b>iMac 27‑inch</b> with Retina 5K display',
				desc : '<ul class="list list-circle"> <li>27‑inch (diagonal) LED‑backlit Retina&nbsp;5K display</li> <li>3.2GHz or 3.3GHz quad‑core Intel Core&nbsp;i5 or 4.0GHz quad-core Intel Core&nbsp;i7 processor<br>Turbo Boost up to 4.2GHz</li> <li>1TB 7200‑rpm hard drive; 1TB, 2TB or 3TB Fusion Drive; or up to 1TB flash storage (SSD)<sup>2</sup></li> <li>Apple&nbsp;Magic&nbsp;Keyboard and Magic&nbsp;Mouse&nbsp;2 or Magic&nbsp;Trackpad&nbsp;2</li> </ul>',
				img : 'images/product_imac_retina_27_large.png',
				type : 'imac'
			},

			{
				id : 9,
				name : '<b>Mac mini</b>',
				desc : '<ul class="list list-circle"> <li>Up to 3.0GHz dual-core Intel Core i7 processor<br>Turbo Boost up to 3.5GHz</li> <li>The world’s most energy-efficient desktop computer<sup>5</sup></li> <li>Up to 1TB hard drive; 256GB, 512GB or 1TB flash storage (SSD); or 1TB or 2TB Fusion Drive<sup>2</sup></li> </ul>',
				img : 'images/product_mac_mini_large.png',
				type : 'mini'
			},

			{
				id : 10,
				name : '<b>Mac Pro</b>',
				desc : '<ul class="list list-circle"> <li>3.7GHz Quad-Core, 3.5GHz 6-Core, 3.0GHz 8-Core or 2.7GHz 12-Core Intel Xeon E5 processor<br>Up to 30MB of L3 cache</li> <li>Up to 1TB flash storage (SSD)<sup>2</sup></li> </ul>',
				img : 'images/product_mac_pro_large.png',
				type : 'macpro'
			}
		];

		function getProduct (id) {
			if (id) {
				for (var count = 0; count < productDataList.length; ++count) {
					var item = productDataList[ count ];
					if (parseInt (item.id) === parseInt (id)) {
						return item;
					}
				}
			}

			return null;
		}

		function getProducts (category) {
			var temp = [];
			for (var count = 0, len = productDataList.length; count < len; ++count) {
				var product = productDataList[ count ];
				if (category === product.type) {
					temp.push (product);
				}
			}

			// no matches, return full product list
			if (temp.length <= 0) {
				temp = productDataList;
			}
			return temp;
		}

		return {
			getProducts : getProducts,
			getProductDetails : getProduct
		};

	} ]);
}) ();