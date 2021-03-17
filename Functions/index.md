---
layout: layouts/home.njk
title: Functions
templateClass: tmpl-post
eleventyNavigation:
  key: Function
  order: 5
---

<script>

/*---- <> ----*/


function outputMessage() {
    console.log('Output Message');
}

/* ------ Task 1 ------ */



console.log('Task 1 Start');
console.log('-------------');

outputMessage();

console.log('-------------');
console.log('Task 1 End');

console.log('-----------------------------------')

function combineStrings(string1, string2) {
    console.log(fName + "" + lName);
}

/* ------ Task 2 ------ */

console.log('Task 2 Start')
console.log('-------------');

    var fName= 'Jesper';
    var lName= 'Spangberg';

combineStrings(fName + "_" + lName);

console.log('-------------');
console.log('Task 2 End');

console.log('-----------------------------------');


/* ------ Task 3 ------ */

function combineStringsAndReturn(string1, string2) {
    var combinedStrings = string1 + " " + string2;
    return combinedStrings;
}

console.log('Task 3 Start');
console.log('-------------');

var fName = 'Jesper';
var lName = 'Spangberg';

var names = combineStringsAndReturn(fName, lName);

console.log(names);

console.log('-------------');
console.log('Task 3 End');

*/

console.log('Task 4 Start');
console.log('-------------');
/*---- < > || >= <= ----*/

// Both Comparisons have to be true &&
// One comparison have to be true 

function shouldIPutOnACoat(temp) {

    if (temp <= 50 && temp > 30) { //temp less than or equal to 50 && temp or higher than 30
        message = "Put On A Coat";
    } else if (temp < 30) { //temp less than 30
        var message = "Put On A Coat And A Hat";
    } else if (temp  === 0) { 
        var message = "Stay Inside";
    } else {
        var message ="Pants & A Vest Is Fine";
    }
    return message;

};

var temp = 15;

console.log(shouldIPutOnACoat(temp));

console.log('-------------');
console.log('Task 4 End');
</script>