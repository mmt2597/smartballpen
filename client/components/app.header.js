smartApp.directive("navHeader",function(){
	return{restrict:"E",
		templateUrl:"client/components/appheader.html",
		controller:"navCtrl"}
	});
smartApp.controller("navCtrl",function($scope){
		
	$scope.itemLinks=[
		{title:"Home",href:"home"},
		{title:"Features",href:"features"},
		{title:"Why Us",href:"whyUs"},
		{title:"Describe",href:"describe"},
		{title:"Services",href:"services"},
		{title:"Products",href:"products"},
		{title:"Contact Us",href:"contactUs"}]
});