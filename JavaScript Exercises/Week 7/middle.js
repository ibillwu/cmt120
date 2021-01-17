function middle(input) {
    // accepts a string as input, returns the middle character (if length is odd) or the middle two characters (if length is even)
    let output;
    let c=input.length/2;
    if (input.length%2 == 0)
    {
        output=input.slice(c-1,c+1);
    }
    else
    {
        output=input.slice(c,c+1);
    }
    return output;
}

module.exports = middle;