function isVowel(a) {
    a=a.toLowerCase()
    if (a=="a" || a=="e" || a=="i" || a=="o" || a=="u") 
    {
        return true;
    }
    else return false;
}

function pigLatin(word) {
    let uc;
    if (isVowel(word[0])==true || word[0].toLowerCase()=="y")
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
console.log(pigLatin("Stuff!"))