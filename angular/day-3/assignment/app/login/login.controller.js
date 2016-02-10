angular.module('login.controller',['services'])
      .controller('loginCtrl',['$scope','loginService', '$location', '$window', '$route', LoginController])

function LoginController($scope,loginService, $location, $window, $route) {
    console.log();
    $scope.formData = {
                        'email' : '',
                        'password' : ''
                    };
    if($route.current.$$route.originalPath && $route.current.$$route.originalPath == "/logout"){
        loginService.logout();
        $location.path( "/login" );
    }
    else
    {
        $scope.data = loginService.get();
        if($window.localStorage && $window.localStorage.authenticated == 'true')
            $location.path("/home");
    }
    $scope.checkLogin = function(){
        if(loginService.login($scope.formData, $scope.data))
            $location.path( "/home" );
        else alert("Invalid data");
    };

};

