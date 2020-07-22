;(function(){
	angular
		.module('mainApplication', [])
		.controller('ToBuyController', ToBuyController)
		.controller(
			'AlreadyBoughtController',
			AlreadyBoughtController
		)
		.provider(
			'ShoppingListService',
			ShoppingListServiceProvider
		)

	ToBuyController.$inject = [
		'ShoppingListService'
	]
	function ToBuyController(ShoppingListService){
		var list = this
		list.fil = 'aaa'

		list.items1 = ShoppingListService.getItems1()

		list.it1 = ShoppingListService.getIt1()
		list.it2 = ShoppingListService.getIt2()

		list.removeItem = function(itemIndex){
			ShoppingListService.addItem(
				list.items1[itemIndex].name,
				list.items1[itemIndex].quantity
			)
			ShoppingListService.removeItem(itemIndex)
			list.it1 = ShoppingListService.getIt1()
			list.it2 = ShoppingListService.getIt2()
			console.log(list.it2)
		}
	}

	AlreadyBoughtController.$inject = [
		'ShoppingListService'
	]
	function AlreadyBoughtController(ShoppingListService){
		var list2 = this
		list2.items2 = ShoppingListService.getItems2()
		list2.it2 = ShoppingListService.getIt2()
	}

	// If not specified, maxItems assumed unlimited
	function ShoppingListService(Items){
		var service = this

		// List of shopping items
		var items1 = []
		items1 = Items
		var items2 = []

		var it1 = true
		var it2 = false

		service.addItem = function(itemName, quantity){
			{
				var item = {
					name     : itemName,
					quantity : quantity
				}
				items2.push(item)
				it2 = true
			}
		}

		service.removeItem = function(itemIndex){
			items1.splice(itemIndex, 1)

			if (items1.length == 0) {
				it1 = false
			}
			console.log(items1)
		}

		service.getItems1 = function(){
			return items1
		}
		service.getItems2 = function(){
			return items2
		}

		service.getIt1 = function(){
			return it1
		}
		service.getIt2 = function(){
			return it2
		}
	}

	function ShoppingListServiceProvider(){
		var provider = this

		provider.defaults = {
			Items : [
				{ name: 'cookies', quantity: 10 },
				{ name: 'orange', quantity: 5 },
				{ name: 'rice', quantity: 1 },
				{ name: 'apple', quantity: 1 },
				{ name: 'books', quantity: 20 }
			]
		}

		provider.$get = function(){
			var shoppingList = new ShoppingListService(
				provider.defaults.Items
			)

			return shoppingList
		}
	}
})()
