//Exercise 1
//We have a simple object:

//JAVASCRIPT
//let user = {name: "John",years: 30}
//Write the destructuring assignment that reads:
//name property into the variable name.
//years property into the variable age.
//isAdmin property into the variable isAdmin (false if absent)

let user = {
  name: "John",
  years: 30,
};

let { name, year: age, isAdmin = false } = user;

/*Exercise 2
Give the right name:

Create the variable with the name of our planet. How would you name such a variable?
Create the variable to store the name of the current visitor. How would you name that variable?*/

let planetName = "Earth"; // descriptive names that are easy to understand.
let visitorName = "Tony"; //You can replace "Tony" with the actual name of the visitor.

/*Exercise 3
Look at the code. What will be result of the call at the last line and why?

JAVASCRIPT
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()*/

let phrase = "Hello";

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

//sayHi(); // the result of the call at the last line : hello John ; since the condition is true.

/*Exercise 4
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.*/

let userhere = {};
userhere.name = "John";
userhere.surname = "Smith";

userhere.name = "pete"; //let keyword is used for variable declarations, not for modifying properties within an object.

delete userhere.name;

//console.log(userhere);

/*Exercise 6
We have an object storing salaries of our team:

JAVASCRIPT
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.*/

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130,
};

let sum = 0;

for (let employee in salaries) {
  sum += salaries[employee];
}

console.log(sum); // Output the sum

//Exercise 7

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

result = a + b < 4 ? "Below" : "Over";

//Exercise 8
//Rewrite if..else using multiple ternary operators '?'.

if (login == "Employee") {
  message = "Hello";
} else if (login == "Director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "";
}

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : (message = "");
