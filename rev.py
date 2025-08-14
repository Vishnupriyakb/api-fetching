l=(0,1,2,3,4,5)
#s= l[::-1]
#print(s)
rev=[]
i=len(l)-1
while (i>=0):
    rev.append(l[i])
    i-=1
print(rev)