//Exercise 1
/*Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

The function should not modify the array. It should return the new array. For instance:

JAVASCRIPT
let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

alert( filtered )  // 3,1 (matching values)

alert( arr )      // 5,3,8,1 (not modified)*/

function filterRange(arr, a, b) {
  let newarr = arr.filter((item) => item >= a && item <= b);
  console.log(newarr);
}

//Exercise 2

/*Exercises 2
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.*/
function exercise2() {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let users = [john, pete, mary];

  let names = users.map((item) => item.name);
  console.log(names);
}

//Exercises 3
/*
Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:*/

function exercise3() {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [john, pete, mary];

  let sum = arr.reduce((total, user) => total + user.age / 3, 0);

  console.log(sum);
}

filterRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 6);
exercise2();
exercise3();
