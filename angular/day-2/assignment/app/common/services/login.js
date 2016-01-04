angular.module('login.service',[])
       .service('loginService',[loginService]);



function loginService() {

    var service = {};
    service.get = get;
    service.login = login;
    service.email = "";
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
        for( var i = 0; i < data.length; i++) {
            found = data[i].email == formData.email.toLowerCase() && data[i].password == formData.password;
            if(found) {
                i = data.length;
                
            }
        }
        if(found) service['email'] = formData.email;
        return found;
    }

};