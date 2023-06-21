//ARRAYS
//Arrays are used to store multiple values in a single variable. These values can be of different data types
var fruits = ["Mango", "Apple", "Banana", "Orange"];
console.log(fruits); // ["Mango", "Apple", "Banana", "Orange"]

//To access a particular element in an array, we make use of the index number
//index number always starts with zero (0) and progresses upward
//From the example above, Mango is at index 0, Apple is at index 1, Banana is at index 2, and Orange is at index 3
//Let's access the value of Apple using the index number.
console.log(fruits[1]); // Apple

//To add a new element to an array, we use the push() method. The push() method adds an element to the end of the array
fruits.push("Lemon");
console.log(fruits); // ["Mango", "Apple", "Banana", "Orange", "Lemon"]

//To remove an element from an array, we use the pop() method. The pop() method removes the last element from the array
fruits.pop();
console.log(fruits); // ["Mango", "Apple", "Banana", "Orange"]

//To add a new element to an array, we use the unshift() method. The unshift() method adds an element to the beginning of the array
fruits.unshift("Pineapple");
console.log(fruits); // ["Pineapple", "Mango", "Apple", "Banana", "Orange"]

//To remove an element from an array, we use the shift() method. The shift() method removes the first element from the array
fruits.shift();
console.log(fruits); // ["Mango", "Apple", "Banana", "Orange"]

//Changing the value of an array item can be done using the index number of the value to be changed
//For example lets change the value of Apple to Grape
fruits[1] = "Grape";
console.log(fruits); // ["Mango", "Grape", "Banana", "Orange"]