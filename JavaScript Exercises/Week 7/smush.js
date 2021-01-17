function smush(a, b) {
  // merges the two lists a and b by taking alternate elements from each list in turn
  d=[];
  for (let c=0;c<a.length;c++)
  {
    d.push(a[c]);
    d.push(b[c]);
  }
  return d;
}

module.exports = smush;
