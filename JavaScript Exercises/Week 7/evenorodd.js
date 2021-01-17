function even_or_odd(num) {
  // returns 'even' if the number given is even, or 'odd' if the number given is odd.
  if (num%2==0)
  {
    var c="even";
  }
  else
  {
    var c="odd"
  }
  return c;
}

module.exports = even_or_odd;
