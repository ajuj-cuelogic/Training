angular.module('home.route', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/home/views/home.html',
    controller: 'homeCtrl'
  });
}]);