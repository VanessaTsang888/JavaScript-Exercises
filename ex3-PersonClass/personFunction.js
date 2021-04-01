/* 

https://www.dofactory.com/javascript/function-objects

*/

function Book (type, author) {
    this.type = type;
    this.author = author;
    this.getDetails = function () {
        return this.type + " written by " + this.author;
    }
}
var book = new Book("Fiction", "Peter King");
alert(book.getDetails());        // => Fiction written by Peter King


/////////////////////////////////////////////////////////////////////////////


// Person Functionial: Compare age:

// This will give me the smaller age:
const bill = 
const checkAge = (bill, jo) => bill > jo ? bill : jo;
// const isOlder = checkAge(42, 21);

// This will give me the older age:
const checkAgeIfOlder = (bill, jo) => bill < jo ? (bill + " is younger than " + jo)
     : (jo + " is younger than " + bill);
const isOlder = checkAge(42, 21);

console.log(checkAgeIfOlder(bill, jo));
console.log(checkAge(24, 18));

// I need 2 person object. Don't try to comine JS with React.
// Can have multiple instances of components.
























