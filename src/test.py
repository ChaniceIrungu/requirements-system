# Datatypes

## 1. List
fruits = ['apple', 'orange', 'banana', 'grapes', 'mangoes']

# Output the whole list
print(fruits)

# Output a fruit at a particular index
print(fruits[0])

# Print the type of object
print(type(fruits))

# Print list at a range or "slice"
print(fruits[:1:-1])

# Length of the list
print(len(fruits))

## 2. Tuple - Immutable list
fruits_tuple = ('apple', 'orange', 'banana', 'grapes', 'mangoes')
print(fruits_tuple)

# Convert tuple to list
fruits_list = list(fruits_tuple)

# Tuples cannot be mutated directly

## 3. Set - Unordered collection of unique items that cannot be accessed by index
fruits_set = {'apple', 'orange', 'orange', 'banana', 'grapes', 'mangoes'}
print(fruits_set)
print(type(fruits_set))

a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

# Modifying sets using union, update, pipe, and intersection
c = a.union(b)  # Returns a new set
print(c)

a.update(b)  # Modifies 'a' in place
# print(a)

e = a | b  # Pipe operator (|) for union
print(e)

# Return items available in both sets (intersection)
f = a.intersection(b)
print(f)

# Return items available only in 'a' and not in 'b' (difference)
g = a.difference(b)
print(g)

# To modify a set, use intersection_update() or difference_update()

## 4. Dictionary - Unordered collection of key-value pairs
child = {"name": "James", "age": 50, "nationality": "Kenyan"}
print(child)

# Accessing values using keys

print(child["name"])  # Output: James
print(child.get("age"))  # Output: 50

# Modifying values

child["name"] = "Jane"
print(child)