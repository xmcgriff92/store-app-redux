user = "James"

print("Hello " + user + " how can I assist you?")

firstNumber = int(input("what is your first number?"))
secondNumber = int(input("what is your second number?"))

operand = input("what oporator?")

if operand == "+":
    print(firstNumber + secondNumber)

if operand == "-":
    print(firstNumber - secondNumber)

if operand == "/":
    print(firstNumber / secondNumber)

if operand == "*":
    print(firstNumber * secondNumber)