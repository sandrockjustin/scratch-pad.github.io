// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 * I: Input is a string argument
 * O: Output is the overall length of the received string argument
 * C: The result must be a number, preferably an integer, that reflects the overall length of the string
 * E: Argument must be a string
 */
function length(string) {
    // YOUR CODE BELOW HERE //
   return string.length; // the .length property is invoked on the string parameter, this line also returns the value of this operation
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 * I: Input is a string argument
 * O: Output is the string argument with lowercase characters
 * C: Argument must return in lowercase
 * E: Argument must be a string
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toLowerCase(); // the native toLowerCase() method is invoked on the string parameter, this line also returns the value of this operation

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 * I: Input is a string argument
 * O: Output is the string argument with uppercase characters
 * C: Argument must return in uppercase
 * E: Argument must be a string
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toUpperCase(); // the native toUpperCase() method is invoked on the string parameter, this line also returns the value of this operation

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 * I: The function takes a string argument
 * O: The output should generate the same string argument, with each whitespace replaced with a dash
 * C: All whitespace should be replaced with a dash "-"
 * E: Individual characters should not be separated by a "-"
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    return string.replaceAll(" ", "-"); // searches for whitespace, replaces with a dash "-"

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * I: Two arguments are received, with one being a string argument and another being string "character" argument
 * O: A boolean datatype is returned if the first string argument begins with the character specified in the second string argument
 * C: A boolean datatype must be returned
 * E: The character argument cannot contain more than one character
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    string.startsWith(char);

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * I: Two arguments are received, with one being a string argument and another being string "character" argument
 * O: A boolean datatype is returned if the first string argument ends with the character specified in the second string argument
 * C: A boolean datatype must be returned
 * E: The character argument cannot contain more than one character
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    if (string[(string.length - 1)] === char) {

        return true; // if the string argument ends with a character that is equal to the char argument, then return TRUE boolean

    } else if (char.length > 1) {

        return "Logic Error: second argument must be a single character."; // if the char argument is not a single character, display logic error message

    } else {

        return false; // if the string argument is not equal to the char argument, then return FALSE boolean

    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 * I: Receives two string arguments for concatentation
 * O: Returns the result of string arguments following their concatentation
 * C: Arguments should both be strings
 * E: Not applicable / unsure
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

        return stringOne + stringTwo; // simple concatenation using arithmetic operator

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 * I: Receives any number of strings
 * O: Returns all of the received string arguments as one joined string
 * C: Must return all strings as one string
 * E: Not applicable / unsure
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments); // included by default, created an array "args" from any string arguments
    return args.join(""); // invokes the .join() array method to join all strings, returns result in this same line
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 * I: Two string arguments are received
 * O: Returns the actual string that wins in a comparison operator
 * C: Compares the .length property of two strings to determine which wins
 * E: It is possible that the strings may be equal
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    if (stringOne.length > stringTwo.length) {

        return stringOne; // Returns stringOne if it is longer than stringTwo.
        
    } else if (stringTwo.length > stringOne.length){

        return stringTwo; // Returns stringTwo if it is longer than stringOne.

    } else {

        return "The strings are equal in length."; // Edge condition, acknowledges that strings could be equal to one another.

    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 * I: Two string arguments are received.
 * O: Returns 1, -1, or 0.
 * C: If stringOne is alphabetically greater than stringTwo, return 1. If stringTwo is alphabetically greater than stringOne, return -1. 
 * E: Possible that conditions are equal, in such case return 0.
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    return stringTwo.localeCompare(stringOne); // uses the localeCompare() method to determine alphabetical hierarchy
    // YOUR CODE ABOVE HERE //
}



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 * I: Two string arguments are received.
 * O: Returns 1, -1, or 0.
 * C: If stringTwo is alphabetically greater than stringOne, return 1. If stringOne is alphabetically greater than stringTwo, return -1. 
 * E: Possible that conditions are equal, in such case return 0.
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    return stringOne.localeCompare(stringTwo); // uses the localeCompare() method to determine alphabetical hierarchy

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}