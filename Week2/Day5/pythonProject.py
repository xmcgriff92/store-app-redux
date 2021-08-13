import random

def homeMenu():
    homeMessage = ("""
    ===========================================
        ~ Welcome to Basic Street Fighter! ~
    1. Press '1' to create a fighter
    2. Press '2' to Fight a formiddable villain
    3. Press 'q' to Quit game
    ===========================================
    """)
    return print(homeMessage)

homeMenu()


class Player:
    def __init__(self, name, strength, health):
        self.name = name
        self.strength = strength
        self.health = health

    
    def damageDelt(self, damage):
        self.strength - self.health

    
    def health(self, health):
        self.health -= health
    


def warrior():
    fighterName = input("What is your fighters name?:")
    fighter = Player(fighterName, 18, 12)
    print("Here are your fighters stats. GOOD LUCK!:")
    print("Name:\n", fighterName,"\nStrength:\n18", "\nHealth:\n45")
    return fighter


villain = Player("Akuma", 20, 15)


def fightMenu():
    fighterInput = input("""
    Attack
    =======\n
    Concede
    =======\n
    """)

def openingSeq(fighter):
    print("\nApproaching an eerie battlefield...\n")
    print("A deep voice in the shadows...\n\nAKUMA:\n'A true warrior enters the arena with ALL his powers at the ready'\n")
    print("AKUMA:\n'YOU ARE NOT READY!'\n")
    print("Prepare for battle...\n")

    while True:
        playerInput = fightMenu()
        if fighter.health >= 0:
            print(fighter, "has lost the battle.")

        # if playerInput == "attack":
        #     print("you have made a move")
        # if playerInput == 'Attack':
        #     print("you have attacked")
            # fighter.damageDelt(villain)
            # if villain.health > 0:
            #     print("Akuma has %d health left" % (villain.health))
            # villainAttack = random.randint(1,15)
            # if villainAttack > 12 and villain.health > 2:
            #     villain.damageDelt(fighter)
            #     print("Akuma has defeated you!")
            # elif villainAttack < 7 and villain.health < 5:
            #     print("You have defeated Akuma!")
            #     break





while True:
    playerInput = input("What would you like to do?:")
    if playerInput == "1":
        fighter = warrior()
    
    if playerInput == "2":
        openingSeq(fighter)
    
    if playerInput == "q":
        break


# number = random.randint(1,200)
# print(number)
# print(number)