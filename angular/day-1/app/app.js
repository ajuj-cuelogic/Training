//'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ngRoute',
  'login',
  'home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
