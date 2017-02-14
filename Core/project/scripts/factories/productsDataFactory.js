angular.module('MainApp').factory('ProductsDataFactory', ProductsDataFactory);

function ProductsDataFactory(){
    var factory = {};
    var productItems = [
        {Id: '1', 
         ProductCode:'RHEAHO', 
         BarCode:'4800067453513', 
         FriendlyName:'RHEA HYDROGEN PEROXIDE', 
         Description: 'Agua Oxigenada', 
         Qty: 15},
        
        {Id: '2', 
         ProductCode:'MRKREAGLEMS300BLK', 
         BarCode:'4800581157300', 
         FriendlyName:'EAGLE MS300 MARKER BLACK', 
         Description: 'Eagle MS300 Marker Black', 
         Qty: 20}
    ];
    
    factory.getAllProducts = function() {
        return productItems;
    };
    
    return factory;
}