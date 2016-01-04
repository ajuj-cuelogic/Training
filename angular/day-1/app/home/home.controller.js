angular.module('home.controller',['services'])
      .controller('homeCtrl',['$scope','homeService', 'loginService', HomeController])

function HomeController($scope, homeService, loginService) {
    $scope.name = homeService.getData(loginService.email);
};

