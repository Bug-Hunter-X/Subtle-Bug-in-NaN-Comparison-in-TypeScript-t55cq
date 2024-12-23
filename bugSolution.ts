function compare(a: any, b: any): number | boolean {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return Number.isNaN(a) === Number.isNaN(b); //This will return false for NaN vs NaN
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compare(NaN, NaN)); //This will return false for NaN vs NaN
console.log(NaN === NaN); //This will return false
console.log(compare(1,2));
console.log(compare(2,1));
console.log(compare(1,1));