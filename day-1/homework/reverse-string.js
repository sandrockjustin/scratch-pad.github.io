// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {

  // YOUR CODE GOES BELOW HERE //

  var reverseStringArray = []; // Establishes a temporary storage array for characters to be stored in reverse
  let resultString = ""; // Establishes a variable to store string during concatentation

  // Loops over string input and adds the characters, in reverse, to the reverseStringArray
  for (var i = (input.length - 1); i >= 0; i--){

    reverseStringArray.push(input[i]);

  }

  // Loops over reverseStringArray, adding and thereby concatentating each character to the resultString variable
  for (var i = 0; i < reverseStringArray.length; i++){

    resultString += reverseStringArray[i];

  }
  
  return resultString; // Returns the string result, which should be the reversed version of the string argument

  // A better version of this code would probably use the native toString() method or maybe even the concat() method. This one will suffice for our intents and purposes.
  
  // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}