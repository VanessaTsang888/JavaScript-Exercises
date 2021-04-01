// Using JS produce a programme finds the max and min value in an array.
// Write unit tests that should verify at least 3 different use cases.

// I am working out the Max and Min value in an array:
const minMaxNums = arr => {
    // maxMinNums = [ 1, 2, 3, 4, 5 ];
    let min = Math.min(...arr) // 1
    let max = Math.max(...arr) // 5
    return [min, max];
    };

    // Will display a new array with two elements: the smallest value and the largest value in the below list:
    console.log(minMaxNums([ 1, 2, 3, 4, 5 ]));




// His instructions don't tell me to display this into the console?

// 3 unit tests to verify at least 3 different use cases? I don't understand this?

// To make this programme more efficent by ???

// to show my understanding of the problem.
// 1. sort the array from smallest to largest - look for a fn online to do this. Find a sort fn, i.e bubble sort.
// 2. pick out the smallest num from array -> 0
// 3. pick out the largest num using builtin method called: arr .length -1 (to get the last item in list) example 2 -1
// 4. Display on console.
// array sorting: how to sort elements inside array.
// This is the normal way to solve the problem as its the most efficent way but to fully demonstrate my understanding of the problem,
// would use the sort() method solution ( sortedArr[0]) or a loop to loop through all the elements inside of an array and pick ou the smallest value
// and pick out the largest value.

/* 

Sorting Solution using the sort() method:

arr = [ 1, 3, 4, 56, 566, 3 ];
sortedArr = arr.sort();
min = sortedArr[0]; // 1
max = sortedArr[ sortedArr.length -1 ]; // 56

minMaxValue = arr => {
    let sortedArr = arr.sort();
    let min = sortedArr[0];
    let max = sortedArr[ sortedArr.length -1 ];

    return [ min, max ];
}

*/



Looping Solution using for loop:

// This list of nums to sort from min to max values:
arr = [ 2334455, 5, 56, 1, 566 ];

// Display the list of elements in the console:
console.log(arr);

// A function to loop through the array and pick out the smallest value and the largest value and store them in a new variable called: minMaxValue:
// Start looping through the array from location 0.
// To start with, I set the max to 0 but this will change later once we've looped throught the array.
minMaxValue = arr => {
    min = arr[0];
    max = 0;

// Find the smallest value by Looping through the array. Then the ternary operator will check if the current num is less than
// the minimum number then the number will become the new minimum.
// Same but for finding the max number.
// i is an counter which we use to start with in our array.
    for(i in arr) {
        let num = arr[i];
        // Looking for the smallest value in the array and store it in the min variable.
        min = num < min ? num : min;
        // If the our current num is greater than max then update max to num. Otherwise leave it:
        max = max < num ? num : max;
        // max = num < max ? num : max;
    }

    // Return new array with the smallest value, and the largest value.
    return [min, max];

    // Can also return an object:
    // return {min, max};
}

// 
minMaxValue(arr);
console.log(minMaxValue(arr));

// The minMaxValue function could return an object instead of array by replacing [min, max] with {min, max}
// using for loop is better than using sortedArr















