angular.module('myApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'app/components/getProductList/getProductList.html',
        controller: 'GetProductListController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/products'
      });
  }]);