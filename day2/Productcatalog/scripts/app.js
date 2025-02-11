var app=angular.module('Productcatalog',[])
var controller=app.controller('productController',function($scope){
    $scope.products=[
        {
            id:1,
            name:'lily',
            price:100
        },
        {
            id:2,
            name:'rose',
            price:200
        },
        {
            id:3,
            name:'jasmine',
            price:300
        }
    ];
    $scope.cart=[];
    $scope.addToCart=function(product){
        $scope.cart.push(product);
    }
    $scope.removeFromCart=function(product){
        const index=$scope.cart.indexOf(product);
        $scope.cart.splice(index,1);
    }
    $scope.getTotal=function(){
        return $scope.cart.reduce((total,product)=>total+product.price,0);
    }
});
