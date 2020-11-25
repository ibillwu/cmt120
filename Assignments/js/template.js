// Exercise 1
function reduceFraction(num, den) {
//Adding Temp Variable    
    a=num;
    b=den;
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
    return undefined;
}

// Exercise 4
function pigLatin(word) {
    return undefined
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