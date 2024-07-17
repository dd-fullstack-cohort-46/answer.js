
/** Simple function that takes two numbers as arguments and performs subtraction on them.
*
@param {number} number1 the first number to be subtracted
@param {number} number2 the second number to be subtracted
@return {number} the result of subtracting number1 from number2
 */

function subtractTwoNumbers (number1, number2) {
    let result = number1 - number2
    return result
}

console.log(`The result of subtractTwo Numbers is: `, subtractTwoNumbers(4, 2))


/**
 * *A simple function that concatenates two strings
 *
 * @param {string} firstString the first value to concatenate
 * @param {string} secondString the second value to concatenate
 * @return {string} the result of concatenating the firstString and the secondString
 **/

function combineTwoStrings (firstString, secondString) {
  // return `${firstString}${secondString}
  return firstString + secondString
}

const result = combineTwoStrings("why is there ", "no space between?")
console.log("The result of combining the two strings is:", result)
