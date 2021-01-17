function largest_in_list(arr) {
  // returns the largest value in the supplied list
  let max = 0;
  for (let c=0; c<arr.length;c++)
  {
    if (arr[c]>= max)
    {
      max = arr[c];
    }
  }
  return max;
}

module.exports = largest_in_list;
