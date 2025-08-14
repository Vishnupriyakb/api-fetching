nums =[2,7,11,15,11,15]
unique_list=[]
[unique_list.append(i) for i in nums if i not in unique_list]
print(unique_list)