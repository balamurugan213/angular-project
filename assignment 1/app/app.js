;(function(){
	angular
		.module('mainApplication', [])
		.filter('the', TheFilter)
		.controller('firstController', function(
			$scope,
			$filter,
			theFilter
		){
			$scope.input = ''
			$scope.message = ''
			$scope.out = ''
			$scope.fil = 'uuu'
			$scope.check = function(){
				console.log($scope.input)
				const work = $scope.input.split(',')
				console.log(work)
				console.log(work.length)
				$scope.out = $filter('uppercase')(
					$scope.input
				)
				if (work == '') {
					$scope.message =
						'Please enter data first'
					$scope.messagestyle = {
						color : '#B5555A'
					}
					$scope.inputStyle = {
						'border-color' : '#B5555A'
					}
				}
				else if (work.length < 4) {
					$scope.message = 'Enjoy!'
					$scope.messagestyle = {
						color : '#398439'
					}
					$scope.inputStyle = {
						'border-color' : '#398439'
					}
				}
				else if (work.length >= 4) {
					$scope.message = 'Too much!'
					$scope.messagestyle = {
						color : '#398439'
					}
					$scope.inputStyle = {
						'border-color' : '#398439'
					}
				}
				$scope.fil = theFilter($scope.input)
				console.log($scope.fil + 'kkkk')
			}
		})
	function TheFilter(){
		return function(input){
			input = input || ''
			input = input.replace('the', 'a')
			return input
		}
	}
})()
