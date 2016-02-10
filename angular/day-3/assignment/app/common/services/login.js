angular.module('login.service',[])
       .service('loginService',['$window','$location', loginService]);



function loginService($window, $location) {
    
    var service = {};
    service.get = get;
    service.login = login;
    service.email = "";
    service.logout = logout;
    return service;


    function get() {
    return [
            {
                'email': 'aju.john@cuelogic.co.in',
                'name':'Aju John',
                'password':'cue245'
            },
            {
                'email':'pranav.naxane@cuelogic.co.in',
                'name':'Pranav Naxane',
                'password':'cue245'
            },
            {
                'email': 'tushar.mate@cuelogic.co.in',
                'name':'Tushar Mate',
                'password':'cue245'
            }
        ];
    }

    function login (formData, data) {
        var found = false;
        var name = "";
        for( var i = 0; i < data.length; i++) {
            found = data[i].email == formData.email.toLowerCase() && data[i].password == formData.password;
            if(found) {
                name = data[i].name;
                i = data.length;
            }
        }
        if(found){ 
            $window.localStorage.authenticated = true;
            $window.localStorage.name = name;
            $window.localStorage.email = formData.email;

            service['email'] = formData.email;
        }
        return found;
    }

    function logout () {
        $window.localStorage.authenticated = false;
        $window.localStorage.name = "";
        $window.localStorage.email = "";
    }

};