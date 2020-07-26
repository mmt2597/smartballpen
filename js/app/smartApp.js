var smartApp = angular.module('smartApp', ['ngRoute']);

	
smartApp.config(function($locationProvider, $routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "client/partials/home/home.html"
		})
});

/*$routeProvider
		.when("/", {
			templateUrl: "client/partials/home/home.html"
		})
	

		
		*/
	

smartApp.controller('smartPenCtrl', ['$scope', function($scope){

	$scope.penItem = [{
		imagePath: 'img/smartpen/7.jpg', // FOR TERABYTE
		href:"SB-T2400",
		name: 'SmartPen',
		price: 'P1,200'
	},{
		imagePath: 'img/smartpen/5.png', // BLUETOOTH
		href: 'SB-BT1K',
		name: 'SmartPen',
		price: "P1,200"
	},{
		imagePath: 'img/smartpen/3.jpg', // WATCH
		href: 'SB-G-REX800',
		name: 'SmartPen',
		price: "P1,200"
	},{
		imagePath: 'img/smartpen/4.jpg', // CAMERA
		href: 'SB-PT321',
		name: 'SmartPen',
		price: "P1,200"
	},{
		imagePath: 'img/smartpen/6.jpg', // VOICE RECORDER
		href: 'SB-VTT1',
		name: 'SmartPen',
		price: "P1,200",
	},{
		imagePath: 'img/smartpen/2.jpg',
		href: 'SB-J1-Series',
		name: 'SmartPen',
		price: "P1,200",
	}];

}]);
smartApp.controller('paymentCtrl', ['$scope', function($scope){

	$scope.paymentItem = [
	{ imagePath: 'img/payment/paypal.png' },
	{ imagePath: 'img/payment/american-express.png' },
	{ imagePath: 'img/payment/bdo.jpg' },
	{ imagePath: 'img/payment/cash-on-delivery.png' },
	{ imagePath: 'img/payment/mastercard.jpg' },
	{ imagePath: 'img/payment/visa.png'}
	];
}]);