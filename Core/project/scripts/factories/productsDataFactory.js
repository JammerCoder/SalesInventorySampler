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
         Qty: 20},
        {Id: '3', 
         ProductCode:'MASTER001', 
         BarCode:'4806789446826', 
         FriendlyName:'MASTER ACTIVE DEEP CLEANER', 
         Description: 'WHITENING W/ PAPAYA EXTRACT AND ZEROIL', 
         Qty: 19},
        {Id: '4', 
         ProductCode:'LIPYLTEA', 
         BarCode:'8888086021001', 
         FriendlyName:'LIPTON YELLOW LABEL TEA', 
         Description: 'LIPTON YELLOW LABEL TEA INTERNATIONAL BLEND', 
         Qty: 14},
        {Id: '5', 
         ProductCode:'EMIHSM', 
         BarCode:'4800112010630', 
         FriendlyName:'EMI HOUSEHOLD SAFETY MATCHES', 
         Description: 'EMI HOUSEHOLD SAFETY MATCHES', 
         Qty: 100}
    ];
    
    factory.getAllProducts = function() {
        return productItems;
    };
    
    return factory;
}