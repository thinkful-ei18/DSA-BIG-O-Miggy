'use strict';
// EVEN OR ODD
function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}
// the function is O(1) , because it only takes one input
// and then puts that input against the if and else statement

// ARE YOU HERE ?

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// the function is O(n^2) because it iterates through the first array
// and then it iterates through the second array.

// DOUBLER
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// the function is O(n) since it goes through the array and doubles
// each element only one through the array

// Naive Search

function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// O(n) it only goes through the array once to find
// the item that you are looking for.


// Creating Pairs
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ', ' +  arr[j] );
    }
  }
}

// O(n^2) since it iterates through the array twice to make the pairs.


// GENERATE FIB
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
//O(n)
// in each logic block the result.push is a constant operation, and the only
// thing we really have to worry about here in terms of complexity is the
// for loop that goes through each i to get the i-th fibbonachi number.

// AN EFFICIENT SEARCH
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

// the complexity of this funciton is O(log(n)) because it splits
// the data into where we know it approx is and it keeps doing that split
// we pretty much ignore the parts of the data set where it wouldnt be
// since the data set is assumed to always be sorted.

// Random Element
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// O(1) since we dont iterate through the array, we just look at a random spot
// every time the function is called.

// IS IT PRIME?
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

//Best case is O(1) otherwise O(n)
