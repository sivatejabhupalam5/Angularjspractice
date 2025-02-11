class GetProductListService {
    constructor($http) {
        this.$http = $http;
        this.apiUrl = 'https://api.example.com/products'; // Replace with your actual API endpoint
    }

    getProducts() {
        return this.$http.get(this.apiUrl)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching products:', error);
                throw error;
            });
    }
}

angular.module('myAngularApp')
    .service('GetProductListService', GetProductListService);