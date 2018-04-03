# Big O Drills Thinkful

These are drills to help us analyze complexity of the functions provided.
Scratchpad contains most of the algorithims analyzed

### Given Functions
----
#### EVEN OR ODD
The function is O(1) , because it only takes one input and then puts that input against the if and else statement

#### ARE YOU HERE ?
the function is O(n^2) because it iterates through the first array and then it iterates through the second array.

#### DOUBLER
the function is O(n) since it goes through the array and doubles each element only one through the array

#### Naive Search
O(n) it only goes through the array once to find the item that you are looking for.

#### Creating Pairs
O(n^2) since it iterates through the array twice to make the pairs.

#### GENERATE FIB
in each logic block the result.push is a constant operation, and the only thing we really have to worry about here in terms of complexity is the for loop that goes through each i to get the i-th fibbonachi number.

#### AN EFFICIENT SEARCH
the complexity of this funciton is O(log(n)) because it splits the data into where we know it approx is and it keeps doing that split we pretty much ignore the parts of the data set where it wouldnt be since the data set is assumed to always be sorted.

#### Random Element
O(1) since we dont iterate through the array, we just look at a random spot every time the function is called.

#### IS IT PRIME?
Best case is O(1) however it is O(n) in general.



### Recursive work form yesterday
----
#### Sheep
O(n)
since it will print an N ammount of sheep

#### ArrayDouble
O(n)
slices and doubles through the entire array only once.

#### String reverse
O(n)
slices and returns the string in backwards order only once

#### Triangle Number
O(n)
because it calls the Triangle Number function an N ammount of times

#### Binary Converter
O(log(n))

#### Factorial
O(n)
because it will get each number from n all the way down to 1 and then multiplication will be constant time.

#### fibonacci
O(n)

#### anagrams
O(n^2)
For loop and recursive call

#### Animal & Organize
O(n)
Because We only go through each object once.

### Iterative versions of the Recursive functions from yesterday
----
#### Sheep
O(n)
since it will print an N ammount of sheep

#### ArrayDouble
O(n)
slices and doubles through the entire array only once.

#### String reverse
O(n)
slices and returns the string in backwards order only once

#### Triangle Number
O(n)
because it calls the Triangle Number function an N ammount of times

#### Binary Converter
O(n)

#### Factorial
O(n)
because it will get each number from n all the way down to 1 and then multiplication will be constant time.

#### fibonacci
O(n)
 
