let a=BigInt(1);
console.log(1," ",a);
let b=BigInt(2);
console.log(2," ",b);
let n=2;
sum=1;
while(n<1000)
{
    c=BigInt(a)+BigInt(b);
    a=BigInt(b);
    b=BigInt(c);
    n=n+1;
    if (BigInt(c)%BigInt(2)==BigInt(1))
        sum=BigInt(sum)+BigInt(c);
    console.log(n," ",BigInt(c));
}

console.log(sum);