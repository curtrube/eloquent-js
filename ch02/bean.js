function countBs(str) {
  let count = 0;
  console.log(`${str} has ${str.length} characters`);
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(`found: ${char}`);
    if (char == "B") {
      count++;
    }
  }
  return count;
}

console.log(countBs("BButterBC"));

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("CurtisRubeck", "c"));
