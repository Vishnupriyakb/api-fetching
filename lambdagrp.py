list=[1,3,5,6]
new_list=[]
for i in list:
    new_list.append(i*i)#or (square(i))
print(new_list)
    
#method 2
square=[i*i for i in list]


#map 
list=[1,3,5,6]
square = map(lambda x:x*x,list)
c=list(map(lambda x:x*x,list))
print(c)