var demoApp = angular.module('demoApp', ['ngRoute']);
demoApp.config(function ($routeProvider) {
    console.log('Inside config');
    $routeProvider
        .when('/',
            {
                controller: 'SimpleController',
                templateUrl: 'partials/view1.html'
            })
        .when('/view2',
            {
                controller: 'SimpleController',
                templateUrl: 'partials/view2.html'
            })
        .otherwise({redirectTo: '/'});
});