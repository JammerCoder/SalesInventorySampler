angular.module('MainApp').requires.push('ngRoute');

angular.module('MainApp').config(RouteConfig);

function RouteConfig($routeProvider){
    $routeProvider.when('/',{
        controller:'MainController',
        template: '/Core/projects/views/partials/main.html'
    }).when('/productsentry',{
        controller: 'ProductsController',
        template: '/Core/projects/views/partials/productsentry.html'  
    }).otherwise({redirectTo: '/'});
}