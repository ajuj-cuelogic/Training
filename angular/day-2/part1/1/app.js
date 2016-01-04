var sampleApp = angular.module('sampleApp',[]);

sampleApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/addNewOrder',{
                templateUrl : 'addNewOrder.html',
                controller : 'addNewOrder',
            }).when('/showAllOrders', {
                templateUrl : 'showAllOrders.html',
                controller : 'showAllOrders',
            }).when('/showOrder/:orderId', {
                templateUrl : 'showOrder.html',
                controller : 'showOrder',
            }).otherwise({
                redirectTo : '/addNewOrder'
            })
        }
    ]);

sampleApp.service('orderService', function () {
    this.orders =   [
                        {
                            itemName : 'Pencil',
                            quantity : '20',
                        },
                        {
                            itemName : 'Pen',
                            quantity : '25',
                        },
                        {
                            itemName : 'Book',
                            quantity : '10',
                        },
                    ];
    this.addNewOrder = function(obj) {
        var found = false;
        for( var i = 0 ; i < this.orders.length; i++) {
            if(obj.itemName.toLowerCase().trim() == this.orders[i].itemName.toLowerCase().trim()){
                this.orders[i].quantity = Number(this.orders[i].quantity) + Number(obj.quantity);
                found = true;
                return false;
            }
        }
        if(!found)
            this.orders.push(obj);
        console.log(this.orders);
    }
})




// sampleApp.config(['$stateProvider', function ($stateProvider) {
//         var addNewOrder = {
//                 name: 'addNewOrder',
//                 url: '/addNewOrder',
//                 templateUrl: 'addNewOrder.html'
//             },
//             showAllOrders = {
//                 name: 'showAllOrders',
//                 url: '/showAllOrders',
//                 templateUrl: 'showAllOrders.html'
//             },
//             showOrder = {
//                 name: 'showOrder',
//                 url: '/showOrder',
//                 templateUrl: 'showOrder.html'
//             };
            
//         //$stateProvider.state(addNewOrder);
//         //$stateProvider.state(showAllOrders);
//         //$stateProvider.state(showOrder);
//     }]);

sampleApp.controller('addNewOrder', function($scope,orderService,$location) {
    $scope.message = "Add new order";
    console.log(orderService);
    $scope.obj = {
                itemName : '',
                quantity : '',
            }
    
    $scope.submitForm = function(){
        orderService.addNewOrder($scope.obj);
        $location.path( "/showAllOrders" );
    }
});
sampleApp.controller('showAllOrders', function($scope, orderService) {
    $scope.message = "View all orders";
    $scope.orders = orderService.orders;
});
sampleApp.controller('showOrder', function($scope, $routeParams) {
    $scope.message = "View order id: "+$routeParams.orderId;
});