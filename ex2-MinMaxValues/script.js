// https://www.w3schools.com/js/js_loop_for.asp

// A function that takes an array of numbers and returns both the minimum and maximum numbers in that order:
// Use a loop to demonstrate how to solve this problem without using the Math method:

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

