function hasTargetSum(array, target) {
  if (array.length < 2) {
    return false;
  }
  array.sort();
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j]);
        return true;
      }
    }
  }
  return false;
}

/* 
  quadratic
*/

/* 
sort array
start with first number, add second number
stop when result is bigger than target
move to second number, combine with third etc
*/

/*
Given an array of integers and a target integer, return true if any two
numbers in the array can be added to equal the target integer. 
Otherwise return false.  

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log('');

  console.log('Expecting: true');
  console.log('=>', hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
