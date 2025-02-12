 authmodule.controller('LoginController', function($scope, loginService,$location,$window) {

    $scope.user = {};

debugger
    $scope.onValidate = function() {

        if ($scope.loginForm.$valid) {

            loginService.validateUser($scope.user).then(function(response) {

                // Handle successful login

                document.getElementById('validation-message').innerText = 'Login successful!';
$location.path('/Getproductlist'); 

            }, function(error) {

                // Handle login error

                document.getElementById('validation-message').innerText = 'Invalid credentials!';
                

            });

        } else {

            document.getElementById('validation-message').innerText = 'Please fill in all required fields.';

        }

    };

});

// authmodule.controller('LoginController', function($scope, loginService, $location) {
//     $scope.user = {};
// debugger
//     $scope.onValidate = function() {
//         if ($scope.loginForm.$valid) {
//             loginService.validateUser($scope.user).then(function(response) {
//                 // Handle successful login
//                 document.getElementById('validation-message').innerText = 'Login successful!';
//                 $location.path('/Getproductlist'); // Navigate to the product list page
//             }, function(error) {
//                 // Handle login error
//                 document.getElementById('validation-message').innerText = 'Invalid credentials!';
//             });
//         } else {
//             document.getElementById('validation-message').innerText = 'Please fill in all required fields.';
//         }
//     };
// });
