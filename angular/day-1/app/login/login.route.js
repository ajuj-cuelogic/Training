angular.module('login.route', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'app/login/views/login.html',
    controller: 'loginCtrl'
  });
}]);