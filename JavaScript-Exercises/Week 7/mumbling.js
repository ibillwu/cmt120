function mumble(input) {
    // accepts a string as input, and returns a new string with the first character repeated once, the second twice, and so on. The first character of each string of repeats should be upper case
    let output1="";
    for (let i=0; i<input.length;i++)
    {
        output1=output1+input[i].toUpperCase();
        for (let c=0; c<i; c++)
        {
            output1=output1+input[i];
        }
        if (i+1!=input.length)
        {output1=output1+"-";}
    }
    return output1;
}


module.exports = mumble;