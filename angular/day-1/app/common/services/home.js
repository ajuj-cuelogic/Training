angular.module('home.service',[])
       .service('homeService',[homeService]);



function homeService() {

    var service = {};
    service.get = get;
    service.getData = getData;
    return service;


    function get() {
    return [
            {
                'email': 'aju.john@cuelogic.co.in',
                'name':'Aju John',
                'address':'cue245',
            },
            {
                'email':'pranav.naxane@cuelogic.co.in',
                'name':'Pranav Naxane',
                'address':'cue245'
            },
            {
                'email': 'tushar.mate@cuelogic.co.in',
                'name':'Tushar Mate',
                'address':'cue245'
            }
        ];
    }

    function getData (email) {
        var name = '';
        var data = service.get();
        for( var i = 0; i < data.length; i++) {
            found = data[i].email == email.toLowerCase();
            if(found) {
                name = data[i].name;
            }
        }
        return name;
    }

};