/* Create a function called fizzBuzz. This function should take in number as a parameter. The function should do the following:

    If the number is divisible by 3 and 5, then return "FizzBuzz"
    If the number is divisible by 3, then return "Fizz"
    If the number is divisible by 5, then return "Buzz"
    Else just return the number

Write a set of tests that pass in various values to the FizzBuzz function and ensure that the function meets the above requirements. Make sure that you test all different "types" of inputs that the function may receive.
*/

function fizzbuzz(number) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    } 
}

