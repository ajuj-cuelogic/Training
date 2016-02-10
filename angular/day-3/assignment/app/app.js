//'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ngRoute',
  'login',
  'home'
]).
config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('myinterceptor');
    $routeProvider.otherwise({redirectTo: '/home'});
}]);

