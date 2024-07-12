function reverseArray(array) {
  let reversedArray = [];
  for (let i of array) {
    reversedArray.unshift(i);
  }
  return reversedArray;
}

// console.log(reverseArray([1, 2, 3, 4, 10]));

function reverseArrayInPlace(array) {
  let temp = 0;
  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    temp = a[i];
    a.splice(i, 1, a[a.length - 1 - i]);
    a.splice(a.length - 1 - i, 1, temp);
  }
  return array;
}

const a = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArrayInPlace(a));
