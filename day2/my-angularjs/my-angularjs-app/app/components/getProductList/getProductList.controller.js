class GetProductListController {
    constructor(GetProductListService) {
        this.GetProductListService = GetProductListService;
        this.products = [];
        this.errorMessage = '';
        this.loadProducts();
    }

    loadProducts() {
        this.GetProductListService.fetchProducts()
            .then(products => {
                this.products = products;
            })
            .catch(error => {
                this.errorMessage = 'Error fetching products: ' + error.message;
            });
    }
}

angular.module('myAngularApp')
    .controller('GetProductListController', GetProductListController);