//==========================Day 4 Problem 1===========================================================================
/* Using javascript inbuilt function
By this way it will copy the objects but not the functions inside the object
*/
var copySimpleObject = function(source, target) {
    target = JSON.parse(JSON.stringify(source));
    return target;
}

/*
Using Recursion
Reference: http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
*/
function copyObject(source, target) {
    // Handle the 3 simple types, and null or undefined
    if (null == source || "object" != typeof source)
        return source;

    // Handle Date
    if (source instanceof Date) {
        var target = new Date();
        target.setTime(source.getTime());
        return target;
    }

    // Handle Array
    if (source instanceof Array) {
        var target = [];
        for (var i = 0, len = source.length; i < len; i++) {
            target[i] = copyObject(source[i]);
        }
        return target;
    }

    // Handle Object
    if (source instanceof Object) {
        var target = {};
        for (var attr in source) {
            if (source.hasOwnProperty(attr))
                target[attr] = copyObject(source[attr]);
        }
        return target;
    }

    throw new Error("Unable to copy object! Its type isn't supported.");
}

//Demo object
var obj = {
    x       :   "Obj 1 text",
    y       :   12,
    z       :   "hjghj",
    obj11   : { xyz: [], hg: {}},
    func    :   function(){ return 1; },
    func2   :   function(){ return "ABC"; },
}
var obj2 = {
    name    :   "Aju",
    x       :   "Obj 2 text",
    y       :   14,
    z       :   "hjghjww",
    obj11   : { xyz: [], hg: {}},
    func    :   function(){ return 1; },
    func2   :   function(){ return "ABC"; },
}

// Copy object testing function
var testCopyObject = function () {
    console.log(copyObject(obj, {}));
}

//========================Day 4 Problem 2==================================================================================================

var combineObject = function (objectA, objectB) {
    var result = copyObject(objectA, {});
    for (key in objectB) {
        if (!result.hasOwnProperty(key)) {
            result[key] = objectB[key];
        }
    }
    return result;
}

//========================Day 4 Problem 3==================================================================================================
/**
Converts any number to float value, upto two decimals
*/
Number.prototype.float = function() {
    return this.toFixed(2);
}

//========================Day 4 Problem 4==================================================================================================
/**
Converts any number to Integer
*/
Number.prototype.int = function() {
    return parseInt(this);
}
//========================Day 4 Problem 5==================================================================================================

var li = document.getElementById('my_ul').children; //to get all li's
for( var i = 0; i < li.length; i++) {
    li[i].onclick = function () { alert(this.innerHTML);}
    //li[i].addEventListener('click', function(){ alert(this.innerHTML);}, false); //can be done this way also
}