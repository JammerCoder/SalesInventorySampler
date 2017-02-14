angular.module('MainApp').requires.push('ngRoute');

angular.module('MainApp').config(RouteConfig);

function RouteConfig($routeProvider){
    $routeProvider.when('/',{
        controller:'MainController',
        templateUrl: '/Core/project/views/partials/main.html'
    }).when('/productsentry',{
        controller: 'ProductsController',
        templateUrl: '/Core/project/views/partials/productsentry.html'  
    }).when('/productslist',{
        controller: 'ProductsController',
        templateUrl: '/Core/project/views/partials/productslist.html'
    }).when('/salesentry',{
        controller: 'ProductsController',
        templateUrl: '/Core/project/views/partials/salesentry.html'
    }).otherwise({redirectTo: '/'});
}