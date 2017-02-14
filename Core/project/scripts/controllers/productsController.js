angular
    .module('MainApp')
    .controller('ProductsController',ProductsController);

function ProductsController($scope){
    console.log('ProductsController loaded...');
}