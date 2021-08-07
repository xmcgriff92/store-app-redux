toDoApp = []
loop = True 

while loop:
    choice = input("Enter 1 to add task\nEnter 2 to remove a task\nEnter 3 to view all tasks\nEnter q to quit \n")
    if choice == "1":
        addTask = input("What task would you like to add to your to-do app?\n")
        addPriority = input("What priority is the task entered, high, medium, or low?\n")
        newTask = addTask + " " + addPriority
        toDoApp.append(newTask)
        print("Here is the revised to-do application:" + str(toDoApp))
    elif choice == "2":
        print("This is your current to-do application:", toDoApp)
        deleteChoice = int(input("Which task would you like to delete from the application?")) -1
        del toDoApp[deleteChoice]
        print("Here is the revised to-do application:", toDoApp)
    elif choice == "3":
        print(toDoApp)
    elif choice == "q":
        print("Thank you for using the to-do application!")
        loop = False
    else:
        print("Sorry that option is not available. Try agian in 10 years")