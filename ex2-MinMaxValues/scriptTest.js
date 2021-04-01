// array sorting: how to sort elements inside array.
// Normal way is the way I've done it but to fully show my understandin of the problem, I have now used sorting array and then
// display new array with the smallest and largest. 

// to show my understanding of the problem.
// 1. sort the array from smallest to largest - look for a fn online to do this. Find a sort fn, i.e bubble sort.
// 2. pick out the smallest num from array -> 0
// 3. pick out the largest num using builtin method called: arr .length -1 (to get the last item in list) example 2 -1
// 4. Display on console.

/* 
// Sort elements in array from smallest value to largest value:
const numbers = [ 10, 105, 18, 24, 5, 74, 84 ];

numbers.sort();

console.log(numbers);

let minMaxNums = numbers => {

} 
*/

/* 
// Create an algorithm that will seek out the larest and smallest number in an array
// without using pre-built functions or methods i.e. such as Math.max() 

const arr = [ 70, 65, 3, 21, 58, 93, 12, 82, 15, 34, 73, 2, 12 ];

// lop through array and compare each element with the first element in array:
let max = arr[0];

*/

// finding the min and max in a list - array then display it.

const numbers = [ 70, 65, 3, 21, 58, 93, 12, 82, 15, 34, 73, 2, 12 ];

let min = null;

// Check that the number I'm currently on is less than the number I have then I need to reset the number I have or the number I have has not
// been found yet just set it:
for (let number of numbers) {
    if (min === null) {
    // we haven't found any number yet
    min = number;
    // Check that the current num is less than minimum I have then set my min to something 
} else if (number < min) {
    // set the new minimum
    // if the num we looking at is less than min, then min is equal to number.
    min = number;
    }
}

console.log('The minimum number is ' + min);

