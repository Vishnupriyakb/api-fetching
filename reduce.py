from functools import reduce
x=[1,2,3,4,5,6,7,8]
num=reduce(lambda a,b:a+b,x)
print(num)

