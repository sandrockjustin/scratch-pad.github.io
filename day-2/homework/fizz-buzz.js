// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for (var i = 1; i <= 100; i++){

        // double conditional expression must come first or other code block might incorrectly execute
        if ((i % 5 === 0) && (i % 3 === 0)) {

            console.log("FizzBuzz");
        
        // checks to see if number i is a multiple of 5
        } else if (i % 5 === 0) {

            console.log("Buzz");
        
        // checks to see if number i is a multiple of 3
        } else if (i % 3 === 0) {

            console.log("Fizz");

        // if none of the aforementioned expressions are true, then simply print i to console
        } else {

            console.log(i);

        }

    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}