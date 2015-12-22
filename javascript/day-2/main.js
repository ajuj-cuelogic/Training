//=============================Day-2 PROBLEM-1===============================================================================
//This module can be called when there are exactly two arguments.
var TwoNumbers = (function() {
    return {
            add      : function(num1, num2) {
                                            return num1 + num2;
                                        },

            subtract : function(num1, num2) {
                                            return num1 - num2;
                                        },

            multiply : function(num1, num2) {
                                            return num1 * num2;
                                        },

            divide   : function(num1, num2) {
                                            return num1 / num2;
                                        }
     }
})();

// this module can be called when arguments are dynamic.
var dynamicNumbers = (function(){
    
    // validate the argument count. count must be greater than one
    var validateArgsCount = function(args) {
        if(args.length < 2) {
            console.log("Altleast 2 arguments are required");
            return false;
        }
        return true;
    }

    // validate the argument type. Arguments must contain Number only
    var validateArgstype = function(val) {
        if(typeof(val) !== "number") {
            console.log("Invalid data type");
            return false;
        }
        return true;
    }
    return {
            add      : function() {
                                    var result = 0;
                                    if(validateArgsCount(arguments)){
                                        for(var i = 0; i < arguments.length; i++){
                                            if(!validateArgstype(arguments[i]))
                                                return false;
                                            result += arguments[i];
                                        }
                                        return result;
                                    }
                                },

            subtract : function() {
                                    var result = 0;
                                    if(validateArgsCount(arguments)){
                                        for(var i = 0; i < arguments.length; i++){
                                            if(!validateArgstype(arguments[i]))
                                                return false;
                                            if(i == 0)
                                                result = arguments[i];
                                            else 
                                                result = result - arguments[i];
                                        }
                                        return result;
                                    }
                                },

            multiply : function() {
                                    var result = 0;
                                    if(validateArgsCount(arguments)){
                                        for(var i = 0; i < arguments.length; i++){
                                            if(!validateArgstype(arguments[i]))
                                                return false;
                                            result *= arguments[i];
                                        }
                                        return result;
                                    }
                                }

        }
})();

//=========================Day-2 PROBLEM-2==============================================================================

//Class Student
var Student = function(stud_name) {
    this.name = stud_name;
    var gender;
    this.setGender = function(gender) {
        this.gender = gender;
    }
}

var student1 = new Student("Mohan");            //Object 1
student1.setGender("Male");

var student2 = new Student("Sohan");            //Object 2

var student3 = new Student("Rohan");            //Object 3

//New function added for object3
//This function is only associated with object3 only
student3.changeThisName = function(new_name) {
    console.log("Name has been changed for this object");
}

//New function  added for the class.
//Now this function can be called for all objects of Student class
Student.prototype.changeName = function(new_name) {
    this.name = new_name;
}



//=========================Day-2 PROBLEM-3==============================================================================


var reserved_keywords = {
                            var     :   "abcd",
                            int     :   "xyz",
                        }
                        

//=========================Day-2 PROBLEM-4==============================================================================

// for loop
for ( i = 1; i <= 100; i++)
    console.log(i);

//while loop
var i = 1;
while(i<=100) {
    console.log(i++);
} 

//do while loop
var i = 1;
do {
    console.log(i++);
} while(i<=100);

