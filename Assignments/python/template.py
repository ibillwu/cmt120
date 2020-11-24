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
    return None


# Exercise 4
def pigLatin(word):
    return None


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
