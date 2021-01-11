const fs = require('fs');
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

function isAlphaNum(a){
    if (a<="Z" && a>="A" || a<="z" && a>="a" || a<="9" && a>="0")
    {
        return true;
    }
    else return false;
}

function pigLatin(word) 
{
    let uc;
    let start=-1;
    if (isVowel(word[0])==true || word[0].toLowerCase()=="y")
    // Check if the first letter is Vowel
    {
        if (isAlphaNum(word[word.length-1])==true) return word+"way";
        else return word.slice(0,word.length-1)+"way"+word[word.length-1]
    }
    else
    {
        if (word[0]==word[0].toUpperCase()) 
        {uc=1;}
        for (sn=0;sn<=word.length-1;sn++)
        {
            if (isVowel(word[sn])==true)
            {
                start = sn;
                break;
            }
        }
        if (start == -1)
        {
            if (isAlphaNum(word[word.length-1])==true) return word+"way";
            else return word.slice(0,word.length-1)+"way"+word[word.length-1];
        }
        else 
        {
            if (uc==1)
            {
                fl=word[start].toUpperCase();
            }
            else fl=word[start].toLowerCase();
            bh=word.slice(0,start);
            if (isAlphaNum(word[word.length-1])==true)
            {
                return(fl+word.slice(start+1,word.length)+bh.toLowerCase()+"ay");
            }
            else
            {
                return(fl+word.slice(start+1,word.length-1)+bh.toLowerCase()+"ay"+word[word.length-1]);
            }
        }
    }
}

// Exercise 5
// Convert Alphabets into Morse Code
function morseAlp(i){
    let Alp = 
    {
        'a':'.-',
        'b':'-...',
        'c':'-.-.',
        'd':'-..',
        'e':'.',
        'f':'..-.',
        'g':'--.',
        'h':'....',
        'i':'..',
        'j':'.---',
        'k':'-.-',
        'l':'.-..',
        'm':'--',
        'n':'-.',
        'o':'---',
        'p':'.--.',
        'q':'--.-',
        'r':'.-.',
        's':'...',
        't':'-',
        'u':'..-',
        'v':'...-',
        'w':'.--',
        'x':'-..-',
        'y':'-.--',
        'z':'--..'
    };
    return Alp[i.toLowerCase()];
}

//Convert Digits into Morse Code
function morseDig(i)
{    
    let Dig={
        '1':'.----',
        '2':'..---',
        '3':'...--',
        '4':'....-',
        '5':'.....',
        '6':'-....',
        '7':'--...',
        '8':'---..',
        '9':'----.',
        '0':'-----'
    };
    return Dig[i];
}

function morseCode(message) {
    let morseMes="";
    // Read Every single char in the message
    for (i=0;i<=message.length;i++)
    {
        if (message[i] >= '0' & message[i] <= '9') {
            morseMes+=morseDig(message[i])+" ";
        }
        else if (message[i]>='a' & message[i]<='z' || message[i]>='A' & message[i]<='Z' ) {
            morseMes+=morseAlp(message[i])+" ";
        }
    }
    // Eliminate the last space in the string
    return morseMes.slice(0, morseMes.length-1);
}

// Exercise 6
function numberTransfer(inp){
    nums={
        '0':'zero',
        '1':'one',
        '2':'two',
        '3':'three',
        '4':'four',
        '5':'five',
        '6':'six',
        '7':'seven',
        '8':'eight',
        '9':'nine',
        '10':'ten',
        '11':'eleven',
        '12':'twelve',
        '13':'thirteen',
        '14':'fourteen',
        '15':'fifteen',
        '16':'sixteen',
        '17':'seventeen',
        '18':'eighteen',
        '19':'nineteen',
        '20':'twenty',
        '30':'thirty',
        '40':'forty',
        '50':'fifty',
        '60':'sixty',
        '70':'seventy',
        '80':'eighty',
        '90':'ninety'
    };
    return(nums[inp.toString()]);
}

function int2Text(num) {
    let textNum = "";
    //Hundredth to Text
    let hun=parseInt(num/100);
    if (hun >= 1){
        textNum+=numberTransfer(hun)+" hundred";
    }
    //get lower than onehundred
    let louHun=num%100;
    // get >= 20
    if (louHun >= 20){
        ten=louHun-louHun % 10;
        louHun = louHun - ten;
        if (textNum!="")
            textNum+=" ";
        textNum+=numberTransfer(ten);
    }
    if (louHun !=0 || textNum=="")
    {
        if (textNum!="")
            {
                textNum+=" ";
            }
        textNum += numberTransfer(louHun);
    }
    return (textNum);
}

// Exercise 7
function missingComment(filename) {
    let data1 = fs.readFileSync(filename, "utf8");
    flag = 0;
    file=data1.split("\n");
    outList = [];
    for (c=0;c<file.length;c++)
    {
        if (file[c].includes("//")) //Split file by lines
        {
            flag = 1;
        }
        else if (file[c].includes("function"))
        {
            if (flag==1)
                flag = 0;
            else
                {
                    temp = file[c].slice(9); //Get rid of function
                    temp = temp.split("("); //Get rid of everything after (
                    outList.push(temp[0]); //Add to the list
                }
        }
    }
    return outList;
}

// // Exercise 8
function consistentLineLength(filename, length) {
    let data2 = fs.readFileSync(filename, "utf8"); //import
    let text = "";
    let templine = "";
    outText = []; //setting temp variables 
    letters=[];
    for (let letter=0;letter<data2.length;letter++) // Eliminate the /n in the end of each line
    {
        if (data2[letter]=="\n") 
        {
            letters.push(" ");
        }
        else
        {
            letters.push(data2[letter]);
        }
    }
    words=letters.join("").split(" ");// Divide the Words by Space
    templine="";
    for(sn=0;sn<words.length;sn++)
    {
        if (words[sn]!="")
        {
            if (templine.length+words[sn].length>=length)
            {
                outText.push(templine);
                templine="";
            }
            if (templine!="")
                {
                    templine+=" ";
                }
            templine+=words[sn];
        }
    }
    outText.push(templine);
    return outText
}

// Exercise 9
function knight(start, end, moves) {
    let steps=[start];
    let direction = [1,1];
    let move=[[1,2],[2,1]];
    let newsteps=[];
    let ends=end.split("");
    for (i=1;i<=moves;i++)
    {
        newsteps=[];
        for (j=0;j<steps.length;j++)
        {
            d=steps[j].split("");
            for (k=0;k<=1;k++)
            {
                if (d[k]>ends[k])
                    {direction[k]=-1;}
                else
                    {direction[k]=1;}
            }
            for (l=0;l<move.length;l++)
                {
                    dx=move[l][0]*direction[0];
                    dy=move[l][1]*direction[1];
                    if ((d[0].charCodeAt()+dx)>= 97 & d[0].charCodeAt()+dx <= 122 & (d[1].charCodeAt()+dy) >= 49 & (d[1].charCodeAt()+dy)<=56)
                        {
                            let newstep=""
                            newstep = String.fromCharCode(d[0].charCodeAt()+dx)+String.fromCharCode(d[1].charCodeAt()+dy);
                            if (newstep==end)
                                {return true;}
                            newsteps.push(newstep);
                        }
                }
        }
        steps=newsteps;
    }
    return false;
}

// Exercise 10
function runEight(inVar,x,y){
    let sitrep={"O":0,"X":0}; 
    let cur=inVar[x][y];
    if (cur == "O") other = "X";
    if (cur == "X") other = "O";
    for (i=-1;i<=1;i++)
        for (j=-1;j<=1;j++)
        {
            
            if(x+i >= 0 & (x+i) < inVar.length & y+j >= 0 & y+j < inVar[x].length & (i!=0||j!=0) )
            {
                c=inVar[x+i][y+j]
                sitrep[c]+=1
            }
        }  
    if (cur==".")
    {
        if (sitrep["X"]>sitrep["O"] & sitrep["X"]>=2)
        {
            out = "X";
        }
        else if (sitrep["O"]>sitrep["X"] & sitrep["O"]>=2)
        {
            out = "O";
        }
        else
        {
            out=".";
        }
    }
    else
    {
        if (sitrep["O"]+sitrep["X"]>6 || sitrep[cur]<3 || sitrep[cur]<sitrep[other])
        {
            out = ".";
        }
        else
        {
            out = cur;
        }
    }
    return out;
}


function warOfSpecies(environment) {
    let outPut=[];
    let env=[];
    for(let linen=0;linen<environment.length;linen++)
    {
        env.push(environment[linen].split(""));
    }
    for(let linen=0;linen<env.length;linen++)
    {
        let temp = [];
        for(charn=0;charn<env[linen].length;charn++)
        {
            temp.push(runEight(env,linen,charn));
        }
        outPut.push(temp.join(""));
    }
    return outPut;
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
