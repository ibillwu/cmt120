function repeat_string(s, n) {
  // returns a string with the string s repeated n times
  let c="";
  for (let d=1;d<=n;d++)
  {
    c=c+s;
  }
  return c;
}

module.exports = repeat_string;
