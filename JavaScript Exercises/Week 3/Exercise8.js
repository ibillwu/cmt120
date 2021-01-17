let num = 463;
let s=0;

s=num%100;
num=floor(num/10)
s=s+num%10;
z=num%10;
num=num/10-z;
s=num+s;
console.log(s);