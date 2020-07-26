smartApp.directive("modalContent",function(){
	return{
		restrict:"E",
		templateUrl:"client/components/modal.html",
		controller:"modalCtrl"
	}});


smartApp.controller('modalCtrl', ['$scope', function($scope){

	$scope.modalItem = [{
		imagePath: 'img/smartpen/7.jpg', // FOR TERABYTE
		href:"SB-T2400",
		name: 'SmartPen',
		price: 'P1,200',
		desc: 'This ballpen has a flashdrive to save your files or backup'
	},{
		imagePath: 'img/smartpen/5.png', // BLUETOOTH
		href: 'SB-BT1K',
		name: 'SmartPen',
		price: "P1,200",
		desc: 'This ballpen has a flashdrive to save your files or backup'
	},{
		imagePath: 'img/smartpen/3.jpg', // WATCH
		href: 'SB-G-REX800',
		name: 'SmartPen',
		price: "P1,200",
		desc: 'This ballpen has a flashdrive to save your files or backup'
	},{
		imagePath: 'img/smartpen/4.jpg', // CAMERA
		href: 'SB-PT321',
		name: 'SmartPen',
		price: "P1,200",
		desc: 'This ballpen has a flashdrive to save your files or backup'
	},{
		imagePath: 'img/smartpen/2.jpg', // VOICE RECORDER
		href: 'SB-VTT1',
		name: 'SmartPen',
		price: "P1,200",
		desc: 'This ballpen has a flashdrive to save your files or backup'
	},{
		imagePath: 'img/smartpen/6.jpg',
		href: 'SB-J1-Series',
		name: 'SmartPen',
		price: "P1,200",
		desc: 'This ballpen has a flashdrive to save your files or backup'
	}];

}]);