angular.module('user.service',[])
       .service('userService',[userService]);



function userService() {

  var service = {};
  service.get = get;
  return service;


  function get() {
    return ['Pranay','Shamsher','Amrutha'];
  }
};