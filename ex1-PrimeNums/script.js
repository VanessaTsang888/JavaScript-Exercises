// Using JS produce a programme that displays the Prime Number between 1 and 100.
// Calculate prime numbers from 1 to 100 and logout to the console or printout to the UI?

// I am working out if num is a Prime Number or not (if true then it's Prime. If false then its NOT Prime):
const isPrime = num => {
    //  I am using a loop to check if there is another number that fits perfectly inside of the num parameter:
    // Starting from 2 as 1 is NOT a Prime Number:
    for(let i = 2; i < num; i++) { // Loop through to find out what number fits in our num parameter.
        if(num % i === 0) {
            return false; // Check if a number can be divided exactly into our num parameter. If so, its not Prime so will exit the program.
        }
    }
    // This will return true if there are no other numbers can fit inside our num parameter (except for num itself):
    // Has to be greater than 1 as Prime Number must be greater than 1:
    return num > 1;
}

// Will logout false meaning 9 that I've passed in as the parameter is NOT a Prime Number:

// Display all Prime Numbers in the UI:
document.querySelector('.calculate').addEventListener('click', function () {
    // Checking numbers 1 to 100 to see if any of them are Prime Numbers:
    for (let i = 1; i <= 100; i++) {
        if (isPrime(i)) {
            // Display the result if Prime or not:
            console.log(i + ' is a prime number');
        }
   
    }
});

// To make this programme more efficent, I can use the square root solution which is to calculate the square root of our
// num parameter because the size of the number will that is divided into num will always be less than square root of num. 
// Example, 6 is not Prime so:
// sqrt 6 = 2.44
// The numbers that fit into 6 are 1, 2, 3, 6. 
// Because 2 is less than sqrt 6 (2.44), I only need to loop once not 5 times.