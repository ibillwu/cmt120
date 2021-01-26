# Exercise 1
def reduceFraction(num, den):
    import math
    #Calculate Greatest Common Divisor 
    c=math.gcd(num,den)
    #Calculate Smallest Fraction Terms
    return (int(num/c),int(den/c))


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
    start = -1
    if isVowel(word[0]):
        if word[-1].isalnum()==True:
            return(word+"way") 
        else: 
            return(word[0:len(word)-1]+"way"+word[-1])
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
        #Output
        if start == -1:
            if word[-1].isalnum()==True:
                return(word+"way") 
            else: 
                return(word[0:len(word)-1]+"way"+word[-1])
        else:
            if fls==True:
                fl=word[start].upper()
            else:
                fl=word[start].lower()
            if word[-1].isalnum()==True:
                return(fl+word[start+1:len(word)]+word[0:start].lower()+"ay") 
            else: 
                return(fl+word[start+1:len(word)-1]+word[0:start].lower()+"ay"+word[-1])


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
    if louHun !=0 or textNum=="":
        if textNum!="":
            textNum+=" "
        textNum += numberTransfer(louHun)
    return textNum


# Exercise 7
def missingComment(filename):
    file = open(filename)
    flag = 0
    outList = list()
    for line in file:
        if "#" in line: #Add flag for notes
            flag = 1
        elif 'def' in line:
            if flag == 1:
                flag = 0
            else:
                temp = line[4:] #Get rid of def
                temp = temp.split("(") #Get rid of everything after (
                outList.append(temp[0]) #Add to the list
        elif flag == 1:
            flag = 0
    return outList

# Exercise 8
def consistentLineLength(filename, length):
    file = open(filename) #import
    text = str("") 
    templine = ""
    outText = list([]) #setting temp variables
    for line in file:#get every line in one variable, remove \n and add " " to the end of each line
        text+=line.strip()+" "
    text=text.split(" ")#split the string by space
    for i in text:
        if len(templine)+len(i)>=length:
            outText.append(templine)
            templine=""
        if templine!="" and i!='':
            templine+=" "
        templine+=i
    if templine!="":
        outText.append(templine)
    return outText

# Exercise 9
def knight(start, end, moves):
    steps=[start]
    direction = [1,1]
    move=[(1,2),(2,1)]
    for i in range(moves):
        newsteps=[]
        for step in steps:
            for i in range(2):
                if step[i]>end[i]:
                    direction[i]=-1
                else:
                    direction[i]=1
            for x,y in move:
                dx=x*direction[0]
                dy=y*direction[1]
                if "a" <= chr(ord(step[0])+dx) <= "z" and "1" <= chr(ord(step[1])+dy) <= "8":
                    newstep = "".join([chr(ord(step[0])+dx),chr(ord(step[1])+dy)])
                    if newstep==end:
                        return True
                    newsteps.append(newstep)
        steps=newsteps
    return False


# Exercise 10
def runEight(inVar,x,y):
    sitrep=dict()
    sitrep={
        'X':0 ,
        'O':0
        } #Initialize Dict
    for i in range(-1,2):
        for j in range(-1,2):
            # Check if the pointer exist, and check if it's not "."
            if x+i in range(len(inVar)) and y+j in range(len(inVar[x])) and inVar[x+i][y+j]!="." and not i==j==0:
                # Add the status into the dictionary
                sitrep[inVar[x+i][y+j]]+=1
    if len(sitrep)==0:
        out="."
    else:
        if inVar[x][y]==".":
            if sitrep[max(sitrep,key=sitrep.get)]>=2 and sitrep["O"]!=sitrep["X"]:
                out=max(sitrep,key=sitrep.get)
            else:
                out="."
        else:
            if sum(sitrep.values())>6 or sitrep[inVar[x][y]]<3 or max(sitrep,key=sitrep.get)!=inVar[x][y]:
                out="."
            else:
                out=inVar[x][y]
    return out

def warOfSpecies(environment):
    outPut=[]
    for linen,line in enumerate(environment):
        temp = []
        for charn,char in enumerate(line):
            temp.append(runEight(environment,linen,charn))
        outPut.append("".join(temp))
    return outPut