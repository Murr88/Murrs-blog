---
layout: layouts/post.njk
title: Functions
templateClass: tmpl-post
eleventyNavigation:
  key: Function
  order: 11
---
<script>

function outputMessage() {
    console.log('Output Message');
};

console.log('Task 1 Start');
console.log('-------------');

outputMessage():

console.log('-------------');
console.log('Task 1 End');

console.log('-----------------------------------')

function combineStrings(string1, string2) {
    console.log(fName + "" + lName);
}

console.log('Task 2 Start')
console.log('--------------');

    var fName= 'Jesper';
    var lName= 'Spangberg';
combineStrings('fName', 'lName'):

console.log('--------------');
console.log('Task 2 End');

</script>