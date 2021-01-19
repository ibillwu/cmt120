function highestlowest(input) {
    // accepts a string as input, which will be space separated numbers, and you must return the highest and lowest number in the string as a space separated string, highest number first
    var c;
    c=input.split(" ");
    ma=parseInt(c[0]);
    mi=parseInt(c[0]);
    for (let d=0;d<=c.length;d++)
    {
        e=parseInt(c[d])
        if (e>=ma)
        {
            ma = e;
        }
        if (e<=mi)
        {
            mi = e;
        }
    }
    out=ma+" "+mi;
    return out;
}


module.exports = highestlowest;