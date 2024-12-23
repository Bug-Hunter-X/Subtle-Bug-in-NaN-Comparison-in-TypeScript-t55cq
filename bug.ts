function compare(a: any, b: any): number {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; //This will return 0 for NaN vs NaN
  }
}

console.log(compare(NaN, NaN)); //This will return 0
console.log(NaN === NaN); //This will return false