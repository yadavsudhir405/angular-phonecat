'use strict';

var demoApp = angular.module('demoApp', []);

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
demoApp.controller('SimpleController', function ($scope) {
    $scope.customers = [
        {name:'John Smith',city:'Bangalore'},
        {name:'John Doe',city:'Delhi'},
        {name:'Frank',city:'Chennai'}
    ];
    $scope.addCustomer = function () {
        $scope.customers.push(
            {
                name: $scope.newCustomer.name, city: $scope.newCustomer.city
            }
        );
    }
});
