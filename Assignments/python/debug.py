def consistentLineLength(filename, length):
    file = open(filename)
    text = str("")
    templine = ""
    outText = list([])
    lineNo = 0
    for line in file:
        text+=line.strip()+" "
    text=text.split(" ")
    print(text)
    for i in text:
        if len(templine)+len(i)>=length:
            outText.append(templine)
            templine=""
        templine+=i
    outText.append(templine)
    return outText
    
c="/Users/billwu/git/cmt120a/Assignments/python/test_data/text1.txt"
print(consistentLineLength(c,50))