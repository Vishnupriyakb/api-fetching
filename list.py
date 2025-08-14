arr = [1, 2, 3, 5, 1, 4, 7, 3, 2]
a = []

for i in range(len(arr)):
    if arr[i] not in arr[i+1:]: 
        a.append(arr[i])         
print(a)