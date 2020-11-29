// Exercise 1
function reduceFraction(num, den) {
//Adding Temp Variable    
    var a=num;
    var b=den;
    var a,b,c;
//Calculate Greatest Common Divisor 
    while(b!=0)
    {
        c=a%b;
        a=b;
        b=c;
    }
//Calculate Smallest Fraction Terms
    b=den/a;
    a=num/a;
    return [parseInt(a),parseInt(b)];
}

// Exercise 2
function isMagicDate(day, month, year) {
    let left,right;
//Calculate Day*Month
    left=day*month;
//Get Last 2 Digits of Year
    right=year%100;
    return left==right;
}

// Exercise 3
function sublist(l) {
    let outlist = new Array([]); // Define Array for Output, and Create first empty value
    let i,j;
    for (i=1;i<=l.length;i++) // Do loop for range start
    {
        for (j=0;j<=l.length-i;j++)// Do loop for range end
        {
            outlist.push(l.slice(j,j+i)); // Add new Array to the output array
        }
    }
    return outlist;
}

// Exercise 4
function isVowel(a) 
// Vowel Identification
{
    a=a.toLowerCase()
    if (a=="a" || a=="e" || a=="i" || a=="o" || a=="u") 
    {
        return true;
    }
    else return false;
}

function pigLatin(word) 
{
    let uc;
    if (isVowel(word[0])==true || word[0].toLowerCase()=="y")
    // Check if the first letter is Vowel
    {
        if (word[word.length]!="!") return word+"way";
        else return word.slice(0,word.length-1)+"way!"
    }
    else
    {
        if (word[0]==word[0].toUpperCase()) 
        {uc=1;}
        for (sn=0;sn<=word.length-1;sn++)
        {
            if (isVowel(word[sn])==true)
            {
                var start = sn;
                break;
            }
        }
        if (uc==1)
        {
            fl=word[start].toUpperCase();
        }
        else fl=word[start].toLowerCase();
        bh=word.slice(0,start);
        if (word[word.length-1]!="!")
        {
            return(fl+word.slice(start+1,word.length)+bh.toLowerCase()+"ay");
        }
        else
        {
            return(fl+word.slice(start+1,word.length-1)+bh.toLowerCase()+"ay!");
        }
    }
}

// Exercise 5
function morseCode(message) {
    return undefined
}

// Exercise 6
function int2Text(num) {
    return undefined
}

// Exercise 7
function missingComment(filename) {
    return undefined
}

// Exercise 8
function consistentLineLength(filename, length) {
    return undefined
}

// Exercise 9
function knight(start, end, moves) {
    return undefined
}

// Exercise 10
function warOfSpecies(environment) {
    return undefined
}

module.exports = {
    reduceFraction: reduceFraction,
    isMagicDate: isMagicDate,
    sublist: sublist,
    pigLatin: pigLatin,
    morseCode: morseCode,
    int2Text: int2Text,
    missingComment: missingComment,
    consistentLineLength: consistentLineLength,
    knight: knight,
    warOfSpecies: warOfSpecies
}