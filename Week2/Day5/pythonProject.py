# created a universal class for my fighter and villain to avoid creating two for separate entities.
class Player:
    def __init__(self, name, attack, health):
        self.name = name
        self.attack = attack
        self.health = health
    
    def damageDelt(self, damage):
        self.health -= damage

# Using the class, "Player" I used the attributes defined to assign both fighter and villain characteristics.
fighterName = input("What is your fighters name?:")

fighter = Player(fighterName, 40, 80)
print("Here are your fighters stats. GOOD LUCK!:\n")
print("Fighter:", fighterName," Attack:", fighter.attack, " Health:", fighter.health,"\n")



villain = Player("Akuma", 50, 100)
print("Here are your opponents stats:\n")
print("Opponent:",villain.name," Attack:", villain.attack, " Health:",villain.health)


# Villain dialogue to set the tone of the battle using simple print statements
print("\n\nApproaching an eerie battlefield...\n")
print("A deep voice in the shadows...\n\nAKUMA:\nA true warrior enters the arena with ALL his powers at the ready..\n")
print("AKUMA:\nYOU ARE NOT READY!\n")
print("Prepare for battle...\n")

# Created a main loop template to be able to call the function over and over again. Also have an outline just in case I would like to come in and expound on new found logic.
def mainLoop():
    # Utilized while loop to iterate through player options
    while True:
        # Utilized the input functions to take in the users selection to keep track of items being stored
        selection = input("""What would you like to do?:\n
        1. Press '1' to attack\n
        =======================
        2. Press '2' to concede\n
        =======================
        3. Press '3' to Quit\n
        =======================
        """)
# In this section I utilized if/elif statements giving my loop conditional requirements to end if statements were met. I alsi called upon certain attributes in the previous class to draw information to make the statements work.
        if selection == "1":
            print("You have chosen to attack,", villain.name, ". However,", villain.name, "has countered your attack with a swift kick!")
            fighter.damageDelt(villain.attack/2 - 15) 
            print(fighter.name,", your health is currently at", fighter.health,".")
            villain.damageDelt(fighter.attack/2 + 5)
            if fighter.health <= 50 and villain.health <= 60:
                print(fighter.name, ", you should consider conceeding!")
                print("Your current health is at",fighter.health)
            if fighter.health <= 35:
                print(fighter.name,", what do you have to prove?!")
                if fighter.health <= 0:
                    print("You have been defeated. Sorry, you lose.")
                    print(villain.name, ": your best isn't good enough. Leave my presence..")
            elif villain.health <= 10:
                print("Congratulations,",fighter.name, "you have defeated,", villain.name,"!\n")
                break
    
        elif selection == "2":
            print(fighter.name, "You have chosen to concede. Unfortunately,", villain.name, "has hit you with a mean punch to kick combo to send you on your way!\n")
            fighter.damageDelt(villain.attack)
            print(villain.name, ": YOU ARE NOT WORHTY.\n")
            if fighter.health <= 50:
                break
        elif selection == "3":
            break


mainLoop()