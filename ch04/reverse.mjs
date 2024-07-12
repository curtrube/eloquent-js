export function reverseArray(array) {
  let reversedArray = [];
  for (let i of array) {
    reversedArray.unshift(i);
  }
  return reversedArray;
}

export function reverseArrayInPlace(array) {
  let temp = 0;
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    temp = array[i];
    array.splice(i, 1, array[array.length - 1 - i]);
    array.splice(array.length - 1 - i, 1, temp);
  }
  return array;
}
