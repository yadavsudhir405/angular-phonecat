demoApp.factory('simpleFactory', function () {
    var customers = [
        {name:'John Smith',city:'Bangalore'},
        {name:'John Doe',city:'Delhi'},
        {name:'Frank',city:'Chennai'}
    ];
    var factory = {};
    factory.getCustomers = function(){
        return customers;
    }
    return factory;
});