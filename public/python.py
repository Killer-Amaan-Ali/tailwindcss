num = 3

if num == 1 :
  print("number is 1")
elif num == 2 :
  print("number is 2")
else :
  print("number is greater than 2")


a, b, c = 30, 10, 50

# min = a if (a < b) else b

# print(min)
print( (b, a, c) [(a < b) & (b < c) & (a < c)] )