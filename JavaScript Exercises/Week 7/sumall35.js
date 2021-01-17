const sumall = require("./sumall");

function sumall35(high) {
  // should return the sum of all multiples of 3 and 5 below high, or -1 if high is not a number
  if (typeof high != "number") 
  {
    return -1;
  }
  let c;
  let sum=0;
  for (c=high-1;c>=0;c--)
  {
    if (c%3==0 || c%5==0) 
    {
      sum=sum+c;
    }
  }
  return sum;
}


module.exports = sumall35;
