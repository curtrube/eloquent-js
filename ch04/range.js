function range(start, end, step = 1) {
  const range = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
  }
  return range;
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

function sum(numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  return sum;
}

console.log(sum(range(1, 10)));
