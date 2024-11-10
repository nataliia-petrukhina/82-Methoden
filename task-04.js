/**
 * Task 04
 * 
 * Complete the code so that the console.log() outputs always the
 * last item in the array, _without mutating the original array_,
 * no matter how long is the array.
 * 
 * For example:
 * 
 * ["a", "b", "c", "d", "e"] => "e"
 * ["a", "b", "c", "d", "e", "f"] => "f"
 * ["a", "b", "c", "d", "e", "f", "g", "h", "i"] => "i"
 * 
 * The console.log() should be only one and work for every array
 */

const letters = ["a", "b", "c", "d", "e", "z"];

let razmer = letters.length;

console.log("razmer massiva ", razmer)

console.log(letters[letters.length-1]);