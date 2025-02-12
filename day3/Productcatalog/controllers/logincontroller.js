angular.module('transflower')
    .controller('LoginController', ['LoginService', function(LoginService) {
        var vm = this;
        vm.user = {};

        vm.onValidate = function() {
            LoginService.validateUser(vm.user)
                .then(function(response) {
                    // Handle successful login
                    console.log('Login successful', response);
                })
                .catch(function(error) {
                    // Handle login error
                    console.error('Login failed', error);
                });
        };
    }]);