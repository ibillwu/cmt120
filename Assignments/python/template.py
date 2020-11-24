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
def morseCode(message):
    return None


# Exercise 6
def int2Text(num):
    return None


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
