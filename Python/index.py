# ----------------------------
# type()
# All Data in Python is Object
# ----------------------------

# print(type(10))  # int => Integer
# print(type(100))  # int => Integer
# print(type(-50))  # int => Integer

# print(type(100.9))  # float => Floating Point Number
# print(type(1.950950))  # float => Floating Point Number
# print(type(-100.9595))  # float => Floating Point Number

# print(type("Hello Python"))  # str => String

# print(type([1, 2, 3, 4, 5]))  # list => List

# print(type((1, 2, 3, 4, 5)))  # tuple => Tuple

# print(type({"One": 1, "Two": 2, "Three": 3}))  # dict => Dictionary

# print(type(2 == 2))  # bool => Boolean

# print("hello\bworld")

# print('hello\
#  world\
# ')

# Line Feed
# print("Hello World\nSecond Line")

# Carriage Return
# print("123456\rAbcde")

# Horizontal Tab
# print("Hello\tPython")

# Character Hex Value
# print("\x4F\x73")

myStringOne = "This is Single Quote"
myStringTwo = "This is Double Quotes"

# print(myStringOne)
# print(myStringTwo)

myStringThree = 'This is Single Quote "Test"'
myStringFour = "This is Double Quotes 'Test'"

# print(myStringThree)
# print(myStringFour)

myStringFive = """First
Second 'Test' "Test"
Third"""

myStringSix = """First
Second "Test" \\\ 'Test'
Third"""

print(myStringFive)
print(myStringSix)
# print(fib(5))

str = """
hello
world
"""

# ---------------------------------
# Strings Indexing & Slicing
# [1] All Data in Python is Object
# [2] Object Contain Elements
# [3] Every Element Has Its Own Index
# [4] Python Use Zero Based Indexing ( Index Start From Zero )
# [5] Use Square Brackets To Access Element
# [6] Enable Accessing Parts Of Strings, Tuples or Lists
# ---------------------------------

# Indexing ( Access Single Item )

myString = "I Love Python"

print(myString[0])  # Index 0 => I
print(myString[9])  # Index 9 => t

print(myString[-1])  # Index -1 => First Character From End
print(myString[-6])  # Index -6 => 6th Character From End

# Slicing ( Access Multiple Sequence Items )
# [Start:End] End Not Included
# [Start:End:Steps]

print(myString[8:11])  # yth
print(myString[3:5])  # ov

print(myString[:10])  # If Start Is Not Here Will Start From 0 (I Love Pyt)
print(myString[5:])  # If End Is Not Here Will Go To The End (e Python)
print(myString[:])  # Full Data

print(myString[0::1])  # Full Data
print(myString[::1])  # Full Data

print(myString[::2])  # ILv yhn
print(myString[::3])  # IoePh
print("---------------------")

# ---------------------
# -- Strings Methods --
# ---------------------

# strip() => Remove Spaces From Start And End
# rstrip() => Remove Spaces From Right
# lstrip() => Remove Spaces From Left
# title() => Make First Letter Capital
# capitalize() => Make First Letter Capital
# upper() => Make All String Chars Capital
# lower() => Make All String Chars Small
# swapcase() => Make All String Chars Opposite Case
# count() => Count String Element
# startswith() => Return True If String Starts With Specific Letter
# endswith() => Return True If String End With Specific Letter
# find() => Search For Specific Letter And Return Its Index
# index() => Search For Specific Letter And Return Its Index
# replace() => Search For Specific Letter And Replace It
# split() => Split String Into List Of Strings Based On Separator
# join() => Join List Of Strings Into One String
# isupper() => Return True If All Chars Is Capital
# islower() => Return True If All Chars Is Small
# istitle() => Return True If First Letter Of Each Word Capital
# isalpha() => Return True If All Chars Is Letters Only
# isalnum() => Return True If All Chars Is Letters And Numbers Only
# isspace() => Return True If All Chars Is Spaces Only
# isdigit() => Return True If All Chars Is Digits Only
# isnumeric() => Return True If All Chars Is Numeric Only
# expandtabs() => Set The Tab Size
# zfill() => Add Zeros From Left
# maketrans() => Create A Mapping Table
# translate() => Map The Chars Using The Mapping Table
# rjust() => Add Spaces From Left
# ljust() => Add Spaces From Right
# center() => Add Spaces From Left And Right
# partition() => Search For Specific Letter And Return Tuple Contains (Before String, String, After String)
# rpartition() => Search For Specific Letter And Return Tuple Contains (Before String, String, After String)
# encode() => Encode String
# decode() => Decode String
# ---------------------


a = "    I Love Python    "
print(a.strip())
print(a.rstrip())
print(a.lstrip())

a = "#####I Love Python####"
print(a.strip("#"))
print(a.rstrip("#"))
print(a.lstrip("#"))

a = "@#@#@#I Love Python@#@#@#"
print(a.strip("@#"))
# print(a.rstrip("@#"))
# print(a.lstrip("@#"))

# title()

b = "I Love 2d Graphics and 3g Technology and python"
print(b.title())  # I Love 2D Graphics And 3G Technology And Python

# capitalize()

b = "I Love 2d Graphics and 3g Technology and python"
print(b.capitalize())

# zfill

c, d, e, f = "1", "11", "111", "1111"

print(c)
print(d)
print(e)
print(f)

print(c.zfill(4))
print(d.zfill(4))
print(e.zfill(4))
print(f.zfill(4))

# upper()

g = "osama"

print(g.upper())

# lower()

h = "OSama"

print(h.lower())


# tabulation
def fib(n):
    table = [0, 1]
    for i in range(2, n + 1):
        table.append(table[i - 1] + table[i - 2])
    return table[n]


def fib(n):
    table = [0, 1]
    for i in range(2, n + 1):
        table.append(table[i - 1] + table[i - 2])
        print(table)
    return table[n]


print(fib(6))


# tabulation
def canSum(n, list):
    table = [False] * (n + 1)
    table[0] = True
    for i in range(n + 1):
        if table[i] == True:
            for j in list:
                if i + j < n + 1:
                    table[i + j] = True
    return table[n]


print(canSum(7, [2, 3]))  # True
print(canSum(7, [5, 3, 4, 7]))  # True
print(canSum(7, [2, 4]))  # False
print(canSum(8, [2, 3, 5]))  # True

# List Methods

# append() : add item to end of list
# extend() : add list to another list
# remove() : remove first occurence of item
# sort() : ascending order by default
# reverse() : reverse list
# clear() : remove all items from list
# copy() : return copy of list
# count() : return number of occurences of item
# index() : return index of first occurence of item
# insert() : insert item at given position
# pop() : remove item at given position, list.pop(0) remove first item, list.pop(-1)() remove last item

myList = ["A", "B", "C", "D"]
myList2 = ["E", "F", "G", "H"]
nums = [32, -3, 3, -98, 2, 45, 67, 99, 12, 43, 1, 0]
list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

myList.append("Ee")
myList.extend(myList2)
myList.remove("Ee")

# nums.sort()
nums.sort(reverse=True)  # descending order

myList.sort(reverse=True)  # ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
list.reverse()  # reverse list

a = [1, 2, 3]
b = a.copy()
b.append(4)
print(a)  # [1, 2, 3]
print(b)  # [1, 2, 3, 4]

print(list.count(1))  # 1
list.index(1)  # 0
list.insert(0, 10)  # [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
list.pop()  # remove last item
print(list)  # [10, 1, 2, 3, 4, 5, 6, 7, 8]
list.pop(0)  # remove first item
print(list)  # [1, 2, 3, 4, 5, 6, 7, 8]
list.pop(-1)  # remove last item

# -----------------------------
# -- Tuple --
# -----------
# [1] Tuple Items Are Enclosed in Parentheses
# [2] You Can Remove The Parentheses If You Want
# [3] Tuple Are Ordered, To Use Index To Access Item
# [4] Tuple Are Immutable => You Cant Add or Delete
# [5] Tuple Items Is Not Unique
# [6] Tuple Can Have Different Data Types
# [7] Operators Used in Strings and Lists Available In Tuples
# -----------------------------

# Tuple vs List
# -------------
# [1] Tuples Are Faster Than Lists
# [2] Tuples Can't Be Modified
# [3] Tuples Used As A Dictionary Key
# [4] Tuples Used As A Data Structure Used For Protection Of Data
# -----------------------------
# list => []
# tuple => ()
# -----------------------------
# Tuples are generally faster than lists in Python.
# This is because tuples are immutable, meaning they cannot be modified after creation,
# whereas lists are mutable and can be modified.
# Since tuples are immutable,
# they can be stored more efficiently in memory and accessed more quickly.
# Additionally, operations on tuples such as indexing and unpacking are faster compared to similar operations on lists.
# However, it is important to note that the performance difference between tuples and lists is usually negligible,
# especially for small data sets.
# The choice between using a tuple or a list should be based on the specific requirements of your program and the need for mutability.
# -----------------------------

# Tuple Methods
# -------------
# count() : return number of occurences of item
# index() : return index of first occurence of item


str = "islam"
str2 = "islam"
tuple = ("islam",)
tuple2 = ("islam",)

print(type(str))  # <class 'str'>
print(type(str2))  # <class 'str'>
print(type(tuple))  # <class 'tuple'>
print(type(tuple2))  # <class 'tuple'>

# -----------------------------
# -- Set --
# ---------
# [1] Set Items Are Enclosed in Curly Braces
# [2] Set Items Are Not Ordered And Not Indexed
# [3] Set Indexing and Slicing Cant Be Done
# [4] Set Has Only Immutable Data Types (Numbers, Strings, Tuples) List and Dict Are Not
# [5] Set Items Is Unique
# -----------------------------

# Not Ordered And Not Indexed

# Set Methods
# -----------
# add() : add item to set
# update() : add items to set
# remove() : remove item from set
# discard() : remove item from set
# pop() : remove last item from set
# clear() : remove all items from set
# copy() : return copy of set
# union() : return new set contain all items from both sets
# difference() : return set contain items that only exist in first set
# difference_update() : remove items that exist in both sets
# intersection() : return set contain items that exist in both sets
# intersection_update() : remove items that not exist in both sets
# symmetric_difference() : return set contain items that not exist in both sets
# symmetric_difference_update() : remove items that exist in both sets

set = {"A", "B", "C", "D"}
set2 = {"E", "F", "G", "H"}
set3 = {"A", "B", "C", "D", "A", "B", "C", "D"}
# setOfSet = {set, set2, set3} # Error => unhashable type: 'set'

set.add("Ee")
set.update(set2)
set.remove("Ee")
set.discard("Ee")
set.pop()
set.clear()

set4 = set.copy()
set5 = set.union(set2)
set6 = set.difference(set2)
set7 = set.intersection(set2)
set8 = set.symmetric_difference(set2)
set.difference_update(set2)

print(set4)

# ---------------------------
# -- Dictionary --
# ----------------
# [1] Dict Items Are Enclosed in Curly Braces
# [2] Dict Items Are Contains Key : Value
# [3] Dict Key Need To Be Immutable => (Number, String, Tuple) List Not Allowed
# [4] Dict Value Can Have Any Data Types
# [5] Dict Key Need To Be Unique
# [6] Dict Is Not Ordered You Access Its Element With Key
# ----------------------------

# Dictionary

user = {
    "name": "Osama",
    "age": 36,
    "country": "Egypt",
    "skills": ["Html", "Css", "JS"],
    "rating": 10.5,
}

print(user["name"])
print(user.get("name"))
print(user.popitem())
print(user.items())
