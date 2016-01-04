angular.module('user.route', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'app/user/views/user.html',
    controller: 'userCtrl'
  });
}]);