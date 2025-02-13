
angular.module('transflower')
    .service('LoginService', ['$http', function($http) {
        this.validateUser = function(user) {
            // return $http.post('/api/login', user)
            //     .then(function(response) {
            //         return response.data;
            //     });
            return {
                then: function(callback) {
                    callback({data: {message: 'Login successful'}});
                    return {
                        catch: function(callback) {
                            callback({data: {message: 'Login failed'}});
                        }
                    };
                }       
        };
    }}]);