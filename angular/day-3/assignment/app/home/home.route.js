angular.module('home.route', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/home/views/home.html',
            controller: 'homeCtrl'
        })
        .when('/add', {
            templateUrl: 'app/home/views/edit.html',
            controller: 'homeCtrl'
        })
        .when('/edit/:email', {
            templateUrl: 'app/home/views/edit.html',
            controller: 'homeCtrl'
        });
    }]
);