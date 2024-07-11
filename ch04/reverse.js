function reverseArray(array) {
  let reversedArray = [];
  for (let i of array) {
    reversedArray.unshift(i);
  }
  return reversedArray;
}

// console.log(reverseArray([1, 2, 3, 4, 10]));

function reverseArrayInPlace(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     console.log(array[i]);
  //   }
  let count = array.length;
  console.log(count);
  while (count > 0) {
    array.unshift(array.pop());
    console.log(array);
    count = count - 1;
  }
}

// reverseArrayInPlace([3, 4, 5, 6]);

function sum(nums) {
  let total = 0;
  for (let i of nums) {
    total += i;
  }
  const sum = total / nums.length;
  console.log(`total: ${total}`);
  console.log(`sum: ${sum}`);
}

//sum([168, 174, 103, 179]);
