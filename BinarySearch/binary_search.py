

count = 0
def binary_searchs(l, target, count):
    mid = len(l)//2
    if(len(l) == 0):
        return "Not Found"
    if (l[mid] == target):
        return f"Found at {count} iterations"
    elif (l[mid] < target):
        new_list = l[mid+1:len(l)]
        return binary_searchs(new_list, target, count+1)
    else:
        new_list = l[0:mid]
        return binary_searchs(new_list, target, count+1)

l = [12,44,56,78,89,99]
# bs = binary_searchs(l, 99, count=1)
# print(bs)


print(len(l[0:4]))
print(l[0:4])
print(l[4])
print(l[5:])