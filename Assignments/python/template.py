# Exercise 1
def reduceFraction(num, den):
    #Adding Temp Variable    
    a = num
    b = den
    #Calculate Greatest Common Divisor 
    while b!=0:
        c=a%b
        a=b
        b=c
    #Calculate Smallest Fraction Terms
    b=den/a
    a=num/a
    return (int(a),int(b))


# Exercise 2
def isMagicDate(day, month, year):
#Calculate Day*Month
    left = day * month
#Get Last 2 Digits of Year
    right = year%100
#Return Answer
    return left == right

# Exercise 3
def sublist(l):
    #init output list
    outlist = [[]]
    # big cycle for step
    for i in range(1,len(l)+1):
    # small cycle for location
        for j in range(0,len(l)-i+1):
            outlist = outlist + [l[j:j+i]]
    return(outlist)


# Exercise 4
#Define Vowel Identification
def isVowel(a):
    a=a.lower()
    if a=="a" or a=="e" or a=="i" or a=="o" or a=="u":
        return(True)
    else:
        return(False)

def pigLatin(word):
    if isVowel(word[0]) or word[0].lower=="y":
        if word[-1]!="!":
            return(word+"way") 
        else: 
            return(word[0:len(word)-1]+"way!")
    else:
        #Record Upper Status
        fls=word[0].isupper()
        i=0 #Counter
        #Get first Vowel
        for i in range(len(word)):
            if isVowel(word[i]):
                start=i
                break
        #Determine First Letter Upper Status
        if fls==True:
            fl=word[start].upper()
        else:
            fl=word[start].lower()
        #Output
        if word[-1]!="!":
            print(word[0:start])
            return(fl+word[start+1:len(word)]+word[0:start].lower()+"ay") 
        else: 
            return(fl+word[start+1:len(word)-1]+word[0:start].lower()+"ay!")


# Exercise 5
def morseAlp(i):
    #define dictionary for alphabets
    Alp=dict()
    Alp={
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
    }
    return(Alp[str.lower(i)])

def morseDig(i):
    #define dictionary for digits
    Dig=dict()
    Dig={
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
    }
    return (Dig[str(i)])


def morseCode(message):
    #defineMorseMessage
    morseMes=""
    for i in range(len(message)):
        if message[i].isdigit() == True:
            morseMes+=morseDig(message[i])+" "
        elif message[i].isalpha() == True:
            morseMes+=morseAlp(message[i])+" "
    #Slice Out the Last Char to Ensure No More Unnecessary Space
    return (morseMes[0:len(morseMes)-1])


# Exercise 6
def numberTransfer(inp):
    #DefineDictionary
    nums=dict()
    nums={
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
        '40':'fourty',
        '50':'fifty',
        '60':'sixty',
        '70':'seventy',
        '80':'eighty',
        '90':'ninety'
    }
    return(nums[str(inp)])


def int2Text(num):
    #init
    textNum = ""
    #Hundredth to Text
    hun=num//100
    if hun >= 1:
        textNum+=numberTransfer(hun)+" hundred"
    #get lower than onehundred
    louHun=num%100
    #get >= 20
    if louHun >= 20:
        ten=louHun-louHun % 10
        louHun = louHun - ten
        if textNum!="":
            textNum+=" "
        textNum+=numberTransfer(ten)
        flag=1
    if louHun !=0:
        if textNum!="":
            textNum+=" "
        textNum += numberTransfer(louHun)
    return textNum


# Exercise 7
def missingComment(filename):
    return None


# Exercise 8
def consistentLineLength(filename, length):
    return None


# Exercise 9
def knight(start, end, moves):
    return None


# Exercise 10
def warOfSpecies(environment):
    return None
