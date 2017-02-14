angular
    .module('MainApp')
    .controller('ProductsController',ProductsController);

function ProductsController($scope,ProductsDataFactory){
    
    var df = ProductsDataFactory;
   
    $scope.btnNewProductSave = "Save";
    $scope.btnNewProductCancel = "Cancel";
    
    $scope.products = getProducts(df);
    
    $scope.addNewProduct = function(){
        $scope.products.push({
            Id: '...', 
            ProductCode: $scope.newProduct.ProductCode, 
            BarCode: $scope.newProduct.BarCode, 
            FriendlyName: $scope.newProduct.FriendlyName, 
            Description: $scope.newProduct.Description, 
            Qty: $scope.newProduct.Qty
        });
        clearEntry();
    };
    
    $scope.cancelAdd = function(){
        //logic: when cancel = clear(), when close = back to ProductList
        clearEntry();
    };
    
    function clearEntry() {
        $scope.btnNewProductSave = "Add New";
        $scope.btnNewProductCancel = "Close";
    }
}

function getProducts(df){
    return df.getAllProducts();
}


