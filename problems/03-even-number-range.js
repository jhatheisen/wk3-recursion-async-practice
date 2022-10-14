/* Even Number Range

    Write a function that accepts two numbers.
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

function evenNumberRange(num1, num2) {
  let evenArr = [];
  if (num1 === num2) {
    evenArr.push(num1);
    return evenArr;
  } else if (num1 > num2) {
    return evenArr;
  }
  // if abs val of num1 is even
  if (Math.abs(num1) % 2 === 0) {
    evenArr.push(num1);
    return evenArr.concat(evenNumberRange(num1 + 2, num2));
  } else { // if it's odd
    return evenArr.concat(evenNumberRange(num1 + 1, num2));
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = evenNumberRange;
} catch (e) {
    module.exports = null;
}
