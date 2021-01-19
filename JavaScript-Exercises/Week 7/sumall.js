function sumall(num) {
  // returns the sum of all numbers smaller than or equal to num
  let c;
  let sum=0;
  for (c=num;c>=0;c--)
  {
    sum = sum+c;
  }
  return sum;
}

module.exports = sumall;
