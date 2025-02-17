# Defining the Person class
class Person:
    # constructor methids to initiliaze a new Person 
    def __init__(self, name, age):
        # instance attributes to store name, age and other attributes needed
        self.name = name
        self.age = age

    # instance method to introduce the person by printing their name and age
    def introduce(self):
        print(f"My name is {self.name}, and I am {self.age} years old.")


# an instance of the Person class with name "Shan" and age 28
person1 = Person("Shan", 28)

# calling the introduce method to dispaly shan's details
person1.introduce()
