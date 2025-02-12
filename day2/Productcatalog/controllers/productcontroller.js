
var controller=Productcatalogmodule.controller('productController',function($scope){
    $scope.products=[
        {
            id:1,
            name:'lily',
            price:100,
            image:'./imagetemplates/lily.jpg'
        },
        {
            id:2,
            name:'rose',
            price:200,
            image:'rose.jpg'
        },
        {
            id:3,
            name:'jasmine',
            price:300,
            image:'jasmine.jpg'

        }
    ];
    $scope.cart=[];
    $scope.addToCart=function(product){
        $scope.cart.push(product);
    }
    $scope.addProduct=function(){
        $scope.products.push({
            id:$scope.products.newProduct.id.length+1,
            name:$scope.newProduct.name,
            price:$scope.newProduct.price,
            image:$scope.newProduct.image
        });
        $scope.name='';
        $scope.price='';
        $scope.image='';
    }   
    $scope.removeFromCart=function(product){
        const index=$scope.cart.indexOf(product);
        $scope.cart.splice(index,1);
    }
    $scope.getTotal=function(){
        return $scope.cart.reduce((total,product)=>total+product.price,0);
    }
});
