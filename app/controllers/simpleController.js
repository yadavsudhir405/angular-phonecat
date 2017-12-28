demoApp.controller('SimpleController', function ($scope, simpleFactory) {
    $scope.customers = simpleFactory.getCustomers();
    $scope.addCustomer = function () {
        $scope.customers.push(
            {
                name: $scope.newCustomer.name, city: $scope.newCustomer.city
            }
        );
    }
});