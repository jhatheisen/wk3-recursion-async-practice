/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

function sort(nums) {
    // Your code here
    if (nums.length === 0) {
      return [];
    }
    let sorted = [];
    let smallestI = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[smallestI]) {
        smallestI = i;
      }
    }
    sorted.push(nums[smallestI]);
    nums.splice(smallestI, 1);
    return sorted.concat(sort(nums));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
