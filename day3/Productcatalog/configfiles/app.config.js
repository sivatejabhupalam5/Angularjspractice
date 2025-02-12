angular.module('transflower')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: '../login.html',
                controller: 'loginController',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }]);