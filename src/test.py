# Datatypes 
# 1. list
fruits = ['apple', 'orange', 'banana', 'grapes','mangoes']
# output the whole list
print(fruits)
# output a fruit at a particular index
print(fruits[0])
# print the type of object
print(type(fruits))
# print list at a range or "slice"
print(fruits[:1:-1])

# 2. tuple - immutable list
fruits_tuple = ('apple', 'orange', 'banana', 'grapes','mangoes')
print(fruits_tuple)
#  converrt tuple to list
fruits_list = list(fruits_tuple)
# to mutatate a tuple 

## 3. set - unordered collection of unique items that cannot be accessed by index
fruits_set = {'apple', 'orange', 'orange', 'banana', 'grapes','mangoes'}
print(fruits_set)
print(type(fruits_set))

a = {1,2,3,4,5}
b = {4,5,6,7,8}

# modifying sets using union, udpdate, pipe and intesection
c = a.union(b)
print(c)

a.update(b)
# print(a)

e = a | b
print(e)

#  return items available in both sets
f = a.intersection(b)
print(f) 

#  return items available only in a not in be
g = a.difference(b)
print(g) 

# to modify set use intersection_update() or differnce_update()

# 4. dictionarys