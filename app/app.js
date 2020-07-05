;(function(){
	angular
		.module('mainApplication', [])
		.controller('firstController', function($scope){
			$scope.input = ''
			$scope.message = ''
			$scope.check = function(){
				console.log($scope.input)
				const work = $scope.input.split(',')
				console.log(work)
				console.log(work.length)
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
			}
		})
})()
