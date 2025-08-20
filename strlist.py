x=["arun","pratheetha","aswin","vichu"]
#x.sort(reverse=True)  to change ascending to descending we need to use reverse=True
#print(x)

#a=sorted(x) # here it will be written as sortes(x,reverse=True)
#print(a)

x.sort(key= lambda x:len(x)) #(key=len)
print(x)

