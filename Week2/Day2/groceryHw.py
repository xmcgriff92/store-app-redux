groceryList = []
groceryItem = {}
userSelection = ""

# Input to retrieve the users name.
userName = input("Hello, please type your name:")

# Prompt to welcome the user and direct to the menu of options.
print("Welcome,", userName, "to your trusty grocery app!\nPlease follow the instructions on the main menu to proceed with your grocery selection:")

# Created a class to implement different stores to choose from.
class Store:
    def __init__(self, name, address):
        self.name = name
        self.address = address

# Implemented input and main menu simultaineously to make more interactive.
while True:
    userSelection = input("==================================\nPress '1' to add new shopping list\nPress '2' to view shopping list\nPress '3' to delete shopping list\nPress 'L' to leave shopping list:\n==================================\n")
    if userSelection == "1":
        storeName = input("Enter desired store:")
        groceryItem = input("Enter your grocery item:")
        itemPrice = input("Enter the price of item:")
        itemQuantity = input("Enter the quantity of item:")
        itemIndex = str(storeName) + (groceryItem) + (itemPrice) + (itemQuantity)
        groceryList.append(itemIndex)
    if userSelection == "2":
        print("Here is your current shopping list:\n")
        print(groceryList)
    if userSelection == "3":
        print("You have selected item deletion. Here is your current list:", groceryList)
        delete = int(input("Which item would you like to delete?:"))
        del groceryList[groceryItem]


