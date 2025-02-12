angular.module('transflower')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/logincontroller', {
                templateUrl: 'Productcatalog/login.html',
                controller: 'loginController',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: '/logincontroller'
            });
    }]);