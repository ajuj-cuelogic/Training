angular.module('home.service',[])
       .service('homeService',[homeService]);



function homeService() {

    var service = {};
    var data = [
            {
                'email': 'aju.john@cuelogic.co.in',
                'name':'Aju John',
                'address':'Pune',
                'gender' : 'male'
            },
            {
                'email': 'tushar.mate@cuelogic.co.in',
                'name':'Mate Tushar',
                'address':'Mumbai',
                'gender' : 'male'
            },
            {
                'email':'shweta@cuelogic.co.in',
                'name':'Shweta Srivastava',
                'address':'Allahabad',
                'gender' : 'female'
            },
            {
                'email':'pranav.naxane@cuelogic.co.in',
                'name':'Pranav Naxane',
                'address':'Nagpur',
                'gender' : 'male'
            }
        ];
    service.get = get;
    service.getData = getData;
    service.getAllData = getAllData;
    service.setData = setData;
    service.validate_email = validate_email;
    service.deleteData = deleteData;
    service.addData = addData;
    return service;


    function get() {
        return data;
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
    function setData (record, email) {
        var name = '';
        var found = false;
        var data = service.get();
        for( var i = 0; i < data.length; i++) {
            found = data[i].email == email.toLowerCase();
            if(found) {
                if(email.toLowerCase() != record.email.toLowerCase()){
                    if(!service.validate_email(record.email)){
                        return false;
                    }
                }
                data[i] =record;
                i = data.length;
            }
        }
        return found;
    }
    function addData (record) {
        if(!service.validate_email(record.email)){
            return false;
        }
        var data = service.get();
        data.push(record);
        return true;
    }
    function validate_email (email) {
        return !Boolean(service.getData(email));

    }
    function deleteData (email) {
        var name = '';
        var data = service.get();
        for( var i = 0; i < data.length; i++) {
            found = data[i].email == email.toLowerCase();
            if(found) {
                data.splice(i, 1);
                i = data.length;
            }
        }
    }
    function getAllData (email) {
        var record = '';
        var found = false;
        var data = service.get();
        for( var i = 0; i < data.length; i++) {
            found = data[i].email == email.toLowerCase();
            if(found) {
                record = data[i];
                i = data.length;
            }
        }
        return record;
    }

};