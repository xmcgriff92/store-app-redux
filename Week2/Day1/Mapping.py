# phonebook_dict = {
#   'Alice': '703-493-1834',
#   'Bob': '857-384-1234',
#   'Elizabeth': '484-584-2923'
# }

# problem 1
# print(phonebook_dict['Elizabeth'])

# if 'Kareem' not in phonebook_dict:
#     phonebook_dict['Kareem'] = '484-584-2923'
#     print(phonebook_dict)

# elif 'Alice' in phonebook_dict:
#     del phonebook_dict['Alice']
#     print(phonebook_dict)
# elif 'Bob' in phonebook_dict:
#     phonebook_dict['Bob'] = '968-345-2345'
#     print(phonebook_dict)

# problem 2

ramit = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
    {
      'name': 'Jasmine',
      'email': 'jasmine@yahoo.com',
      'interests': ['photography', 'tennis']
    },
    {
      'name': 'Jan',
      'email': 'jan@hotmail.com',
      'interests': ['movies', 'tv']
    }
  ]
}

print(ramit.get('email'))
print(ramit.get('interests')[0])

for key, value in ramit.items():
    print(key, value)

    if value == 'jasmine@yahoo.com':
        value = 'email'
        print(key, value)


# {
#   'name': 'Ramit',
#   'email': 'ramit@gmail.com',
#   'interests': ['movies', 'tennis'],
#   'friends': [
#     {
#       'name': 'Jasmine',
#       'email': 'jasmine@yahoo.com',
#       'interests': ['photography', 'tennis']
#     },
#     {
#       'name': 'Jan',
#       'email': 'jan@hotmail.com',
#       'interests': ['movies', 'tv']
#     }
#   ],
#   'friends_count': 2
# }