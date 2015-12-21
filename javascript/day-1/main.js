
// Defining Variables for different datatypes
var integer_variable    = 1;
var string_variable     = "Hi, this is a string";
var boolean_variable    = true;
var object_variable     = {};
var array_variable      = [1,2,3];

/**
Add data to the end of array
Pass value as argument to add into array(array_variable)
Any type of value can be passed
*/
function addValueToArray(val) {
    array_variable.push(val);
    console.log(array_variable);
    return true;
}

/**
Remove Data from array by index
We have to pass index as an argument, if the index exists then it will reomve the data of that index from array
*/
function removeValueFromArrayByIndex(index) {
    array_variable.splice(index,1);
    console.log(array_variable);
    return true;
}

/**
Remove Data from array by value
We have to pass value as an argument, Search for the value in the array and finds the index of that value, then again we call the removeValueFromArrayByIndex function
*/
function removeValueFromArrayByValue(val) {
    var index = array_variable.indexOf(val);
    removeValueFromArrayByIndex(index)
}

/**
This function will toggle the value of boolean variable(boolean_variable)
*/
function toggleBooleanValue() {
    boolean_variable = !boolean_variable;
    console.log("boolean_variable = "+boolean_variable);
}

/**
this function will concatenate the passed value with the existing string(string_variable) using + operator
Pass an argument to concatenate
*/
function concatenateToString(str) {
    string_variable += str;
    console.log(string_variable);
}

//============================================================================================================================

////////////////////////////////--Creating Object--///////////////////////////////////////////////////////////////////////////

/** Way 1 to create object, using new keyword **/

    function Car(name) {
        this.name = name;
        this.color;
    }

    var car1    = new Car("Mercedez");
    car1.color  = "red";

    var car2    = new Car("BMW");
    car2.color  = "blue";

/** Way 2 to create object, Object Literal notation**/

    var car3 = { 
                    name    : "Swift Dzire",
                    color   : "blue"
                };

/** Way 3 to create object, Object Constructor **/

    var car4    = new Object();
    car4.name   = "Maruti 800";
    car4.color  = "White";
    

////////////////////////////////--Creating Array--///////////////////////////////////////////////////////////////////////////


    var car_array    = new Array(); /** Way 1 to create Array, by creating a blank array **/
    car_array.push("first element");
    var car_array1   = new Array("Mercedez", "Swift Dzire", "Maruti 800");  /** Way 2 to create Array, with Array Constructor **/
    var car_array2   = ["Mercedez", "Swift Dzire", "Maruti 800"];           /** Way 3 to create Array literal notation**/
    
//============================================================================================================================
