class Calculator:
    def add(self,a, b):
        return a + b
    def div(self,a,b):
     if b==0:
        print("cannot be divided by 0")
     else:
        return a / b

calc = Calculator()
print(calc.add(5, 6))
print(calc.div(5,0))