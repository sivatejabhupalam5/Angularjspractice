angular.module('myApp', [])
  .controller('GetProductListController', GetProductListController)
  .service('GetProductListService', GetProductListService);

function GetProductListController(GetProductListService) {
  var vm = this;
  vm.products = [];

  vm.fetchProducts = function() {
    GetProductListService.getProducts().then(function(response) {
      vm.products = response.data;
    });
  };

  vm.fetchProducts();
}

function GetProductListService($http) {
  this.getProducts = function() {
    return $http.get('api/products'); // Replace with your API endpoint
  };
}