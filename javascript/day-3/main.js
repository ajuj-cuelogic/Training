//================Day 3 Problem 1==========================================================================================
//Factorial using recursion
var factorial = function(val) {
    if(val == 0)
        return 1;
    return val * factorial(val-1);
}

//================Day 3 Problem 2==========================================================================================
//Student Class. Takes stud_name as argument
var Student = function(stud_name) {
    this.name = stud_name;
    var gender;
    this.setGender = function(gender) {
        this.gender = gender;
    }
}
//Added function to the class
Student.prototype.printName = function() {
    console.log(this.name);
}
var stud1 = new Student("Ajit");    // Object 1
var stud2 = new Student("Vipul");   // Object 2
var stud3 = new Student("Sonia");   // Object 3

//================Day 3 Problem 3==========================================================================================
var getSubstrinfInfo = function (long_string, sub_str) {
    var regEx = new RegExp(sub_str,"g");
    return {
        'count'     :   (long_string.match(regEx) || []).length,    // count of occurrences of substring
        'lastIndex' :   long_string.lastIndexOf(sub_str)            // last index if found, else -1
    }
}

//================Day 3 Problem 4==========================================================================================
//unix timeStamp and covert to its UTC equivalent value

function UnixTimestampToUTC(timeStamp) {
    var dt = new Date(timeStamp);
    var d = dt.toUTCString();
    return d;
}

//================Day 3 Problem 5==========================================================================================

var breakArray = function (arr) {
    var newArr = [];
    newArr[0] = [];
    newArr[1] = [];
    for(var i = 0; i < arr.length ; i++) {
        newArr[0][i] = arr[i][0];
        newArr[1][i] = arr[i][1];
    }
    return newArr;
}

//================Day 3 Problem 6==========================================================================================
//part 1
var one_to_hundred = new Array();
for(var i = 0; i < 100; i++)
    one_to_hundred[i] = i+1;
//Part 2....
console.log(one_to_hundred.join("\n"));