'use strict';
/*jshint unused: false, undef:false */
var items;

app.controller('ItemController', function($scope){
  $scope.toggleCategories = function () {
    $scope.categoriesActive = ($scope.categoriesActive) ? false : true;
    return $scope.categoriesActive;
  };
	this.products = items;
});

items = [
{
	name: 'Perspectives in Medical Sociology (2007, Paperback)',
	price: 122.45,
	seller: 'Mike Sellers',
	condition: 'new',
	description: 'item description',
	images: [
		{
			full: 'images/bradleys-book-outlet-books-only-logo.png',
			thumb: 'images/bradleys-book-outlet-books-only-logo.png'
		}
	],
	available: true,
	sold: false
},
{
   name: 'Perspectives in Medical Sociology (2007, Paperback)',
	price: 22.45,
	seller: 'Mike Sellers',
	condition: 'like new',
	description: 'item description',
	images: [
		{
			full: 'images/bradleys-book-outlet-books-only-logo.png',
			thumb: 'images/bradleys-book-outlet-books-only-logo.png'
		}
	],
	available: true,
	sold: false
},
{
   name: 'Perspectives in Medical Sociology (2007, Paperback)',
	price: 122.45,
	seller: 'Mike Sellers',
	condition: 'used',
	description: 'item description',
	images: [
		{
			full: 'images/bradleys-book-outlet-books-only-logo.png',
			thumb: 'images/bradleys-book-outlet-books-only-logo.png'
		}
	],
	available: true,
	sold: false
},
{
   name: 'Perspectives in Medical Sociology (2007, Paperback)',
	price: 19.99,
	seller: 'Mike Sellers',
	condition: 'new',
	description: 'item description',
	images: [
		{
			full: 'images/bradleys-book-outlet-books-only-logo.png',
			thumb: 'images/bradleys-book-outlet-books-only-logo.png'
		}
	],
	available: true,
	sold: false
},
{
   name: 'Perspectives in Medical Sociology (2007, Paperback)',
	price: 12.45,
	seller: 'Mike Sellers',
	condition: 'new',
	description: 'item description',
	images: [
		{
			full: 'images/bradleys-book-outlet-books-only-logo.png',
			thumb: 'images/bradleys-book-outlet-books-only-logo.png'
		}
	],
	available: true,
	sold: false
},
{
   name: 'Perspectives in Medical Sociology (2007, Paperback)',
	price: 332.45,
	seller: 'Mike Sellers',
	condition: 'new',
	description: 'item description',
	images: [
		{
			full: 'images/bradleys-book-outlet-books-only-logo.png',
			thumb: 'images/bradleys-book-outlet-books-only-logo.png'
		}
	],
	available: true,
	sold: false
}
];
