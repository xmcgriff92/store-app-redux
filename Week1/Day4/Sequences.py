#1
numbers_list = [1, 2, 3, 4, 5, 6]
sum_of_numbers = sum(numbers_list)
print(sum_of_numbers)

# 2 and 3
list_of_numbers = [10, 20, 30, 40, 50]
print("Largest number is:", max(list_of_numbers))
print("Smallest number is:", min(list_of_numbers))

#4
numbers_list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for number in numbers_list2:
    if number %2 == 0:
        print(number, end = "")

#5 find positive number in list
positive_list = [-1, -3, -66, 7, -3, -54, -42, 3, -89, -36, 1]
for number in positive_list:
    if number > 0:
        print(number, end = "\n")

#6 create a list then create another list containing positive numbers
#regular_list = [-2, 2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8]
#new_list = [for number in regular_list if number > 0: print(new_list)]

#7 multiply a list
age_list = [18, 22, 32, 19, 28, 44, 55]
doubled_age_list = []

for number in age_list:
    doubled_age_list.append(number * 2)
print(doubled_age_list)

#8 reverse string
slice = "Sauce"
stringLength = len(slice)
slicedString = slice[stringLength::-1]
print(slicedString)