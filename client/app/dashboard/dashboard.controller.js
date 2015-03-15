'use strict';

angular.module('umxApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.message = 'Hello';
  })

  .controller('CreateController', function ($scope, $modal) {
    $scope.openModal = function () {
      $modal.open({
        templateUrl: 'CreateModal.html',
        controller: 'ModalCtrl'
      });

    };
  })

  .controller('ConditionController', function ($scope) {
    $scope.items = [
      'new',
      'Like new',
      'used',
      'free'
    ];
  })

  .controller('ItemController', function ($scope) {
    $scope.toggleCategories = function () {
      $scope.categoriesActive = ($scope.categoriesActive) ? false : true;
      return $scope.categoriesActive;
    };
    this.products = items;
  })


  .controller('ProductListController', function ($scope, $state, Product) {

    //get all the products in the db
    $scope.product = Product.query();

    $scope.deleteProduct = function (product) {
      product.$delete();
    };
  })

  .controller('ProductViewController', function ($scope, Product, ProductService) {
    //Get a single product from the list
    $scope.id = null;
    $scope.getProduct = function () {
      ProductService.get({id: $scope.id});
    };
  })

  .controller('ProductCreateController', function ($scope, Product, ProductService) {
    $scope.product = new Product();

    $scope.addProduct = function () {
      ProductService.save({id: $scope.id});
    };
  })

  .controller('ProductEditController', function ($scope, Product, ProductService) {
    $scope.updateProduct = function () {
      $scope.product.$update();
    };

    //get a product to update
    $scope.product = function () {
      ProductService.get({id: $scope.id});
    };
    //load the product that was just updated
    $scope.loadProduct();

  });

var items;
items = [
  {
    name: 'Perspectives in Medical Sociology (2007, Paperback)',
    price: 122.45,
    seller: 'Mike Sellers',
    condition: 'new',
    description: 'item description',
    images: [
      {
        full: '../assets/images/bradleys-book-outlet-books-only-logo.png',
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
        full: '../assets/images/bradleys-book-outlet-books-only-logo.png',
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
        full: '../assets/images/bradleys-book-outlet-books-only-logo.png',
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
        full: '../assets/images/bradleys-book-outlet-books-only-logo.png',
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
        full: '../assets/images/bradleys-book-outlet-books-only-logo.png',
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
