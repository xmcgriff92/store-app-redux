user = "Charles"

print("Hello " + user + " how can I assist you?")

number = int(input("Enter Number:"))

if (number % 3 == 0 and number % 5 == 0):
    print("Fizz Buzz")

elif (number % 3) == 0:
    print("Fizz")

elif number % 5 == 0:
    print("Buzz")

else:
    print("Not divisible by 3 or 5")