angular.module('myinterceptor.service',[])
       .service('myinterceptor',['$rootScope', '$location', '$window', myinterceptor]);



function myinterceptor($rootScope, $location, $window) {
  var service = this;
  service.checkLoggedIn = function ( ) {
    if($window.localStorage && $window.localStorage.authenticated == 'true') {
        document.getElementById('uname').innerHTML = "Hello " + $window.localStorage.name;
        return true;
    }
    document.getElementById('uname').innerHTML = 'Angular';
    return false;
  }

  service.request = function(config) { 
        if(!service.checkLoggedIn())
            $location.path( "/login");
        return config;
    };
    return service;
 
};