/* 

Write a function redundant that takes in a string str and returns a function that returns str.

const f1 = redundant ( "apple" )
f1() -> "apple"

const f2 = redundant("pear")
f2() -> "pear"

const f3 = redundant("")
f3() -> ""

1. README file
2. IDE artefacts
3. Speed of algorithm
4. Display output
5. No personal details in repo
6. Unit tests should verify at least 3 different use cases.

// */

/* 

I don't understand point 6: Unit tests should verify at least 3 different use cases.

Issues with live-server in Cerberus so use node in terminal or just open the html file in the browser:
Terminal: node redundantFunction.js
Update the README file with this.

*/

// This fn is called redundant 
// text is the parameter (variable) that i pass into the fn: 
redundant = text => {
    return () => {
        return text // fn returns the string of whatever i pass in i.e. apple.
    };
};

// Unit tests to verify at least 3 different use cases:
// a function has returned a function that has a string inside it:
// The redundant function returns the inside function f1, then that returns the string apple:
f1 = redundant("apple");
// Same as above but for pear:
f2 = redundant("pear");
// Same as above but for grape:
f3 = redundant("grape");

// Display the x3 functions that returns a string in to the console:
console.log(f1(), f2(), f3());
// this will display the redundant function that returns the f1 function:
// console.log(f1);








