angular.module('login.controller',['services'])
      .controller('loginCtrl',['$scope','loginService', '$location',LoginController])

function LoginController($scope,loginService, $location) {
//  console.log($scope.data);
    $scope.formData = {
                        'email' : '',
                        'password' : ''
                    };
    $scope.data = loginService.get();
    
    $scope.checkLogin = function(){
        //console.log($scope.data);
        //console.log($scope.formData);
        if(loginService.login($scope.formData, $scope.data))
            $location.path( "/home" );
        else alert("Invalid data");
    };
};

