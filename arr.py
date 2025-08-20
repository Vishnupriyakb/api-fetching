#a=[1,2,3,4,5,6,7,8,9]
#y={x**2 for x in a if x%2==1 }
#print(y)


#x=[1,2,3,4,2,3,1]
#y={a for a in x}
#print(y)

#a=[1,2,3,4,5,6,7,8]
#y={x:x**2 for x in a}
#print(y)

#a=[1,2,3,4,5,6,7,8]
#y={x:("even" if x%2==0 else "odd") for x in a}
#print(y)

#a={"apple": 15,"orange":25,"kiwi":20,"peach":26}
#b={x:y for x,y in a.items() if y>=25}
#print(b)

#a={"anu": 15,"abu": 26,"ammu":27}
#b={x:("Pass" if y>=25 else "Fail") for x,y in a.items()}     
#print(b)

#a=["a","b","c","d","e"]
#b=[1,2,3,4,5]
#c={x:y for x,y in zip(a,b)}
#print(c)

a=[1,2,3,4,5]
a=iter(a)
print(a)
print(next(a))
print(next(a))
print(next(a))
print(next(a))
print(next(a))
print(next(a))


