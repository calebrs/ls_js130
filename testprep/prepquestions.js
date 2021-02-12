/*
-------------------------------------------------JAVASCRIPT TOPICS-------------------------------------------------
1. How do these two blocks of code differ?

function foo() {
  if (true) {
    let a = 1;
  }

  console.log(a); //throws error, a is not defined
}

foo();

function foo() {
  if (true) {
    var a = 1;
  }

  console.log(a); // logs undefined to the console
}

foo();

Answer: the first block throws an error on line 10 while the second block prints
1 to the console. This demonstrates how variables declared with let or var differ
in how they are hoisted. In the first block, a has block scope. So when the code
reaches line 13, a is out of scope. One the other hand, when the variable is 
declared with var. it si hoisted within the function block. Meaning that var gets rearranged at the top 
of the funtion then is reassigned to the value of 1 when the if block executes.

2. What errors do the two final lines of this code output?

function foo1() {
  let bar = new Bar();
  class Bar {}
}

function foo2() {
  let bar = new Bar();
}

foo1(); // cannot access bar before initialization
foo2(); 

Answer: An error is thrown on line 2 becuase Bars definition has not been initialized yet.
likewise, bar is out of scope of foo2(), so that code would not execute either.

3. What does the following code output and why?

"use strict";

function foo() {
  bar = 3.1415;
}

foo();
console.log(bar);

Answer: An error is through when bar is assigned a number of line 54. This is becuase in strict mode, you cannot assign variables to the global object
using this syntax. 

4. Describe what the following code outputs and why.

"use strict";

let obj = {
  a: 5,
  go() {
    this.a = 42; // TypeError: Cannot set property 'a' of undefined
  },
};

let doIt = obj.go;
doIt();
console.log(obj.a);

Answer: While strict mode is enabled, the implicit execution context is set to undefined. When the doIt varibl is assigned to the method definition
obj.go, the implicit execution context becomes undefined. So when the doIt() method is called an error is thrown.

5. Describe what this code does and how it realtes to closure:

let counter = 0;

function incrementCounter() {
  counter += 1;
}

incrementCounter();
incrementCounter();
console.log(counter); // 2

Answer: on the first line a new variable is declared and set to 0. lines 85 - 87 define a function. When the function is called on line 89, the code on line
86 runs, adding 1 to counter.  counter now equals 1. after running again counter equals 2. This works, becuase when the function incrementCounter is defined, a closure is created
that contains a reference to counter. So, when the function is called, it can access the counter variable.

6. Write your own example of partial funtion application:

Answer: 

function multiply(num1, num2) {
  return num1 * num2;
}

function makeMultiplier(num1) {
  return function(num2) {
    return multiply(num1, num2)
  }
}

This code demonstrates partial function application in how the makemultiplier function applies the arguments to the function that it returns. 
makeMultiplier applies the first argumetn num1. while it's returned function applies the rest of the arguments when it is called.
>>>>>>> d790a9890a86da947c8f570ef5a4bdaeff57d5f5

7. Write your own example of creating private data using closure. Describe how the data is private

Answer:

let displayAccountNum = (function() {
  let accountNum = 12345;
  return function() {
    console.log(accountNum);
  }
})();

displayAccountNum();

this examples creates private data using a closure and an IIFE. The IIFE that starts on the first line returns a function
whos closure contains a reference to the accountNum variable. So, when displayAccountNum is called it can log the account number 
to the console. The user does not have direct access to edit the accountNum variable.

8. Describe what the following code does. Why would a developer want to do this?
// thousands of lines of messy JavaScript code!

console.log((function(array) {
  let largest = -Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 2) === 0 && (array[index] > largest)) {
      largest = array[index];
    }
  }

  return largest;
})([5, 10, 12, 7, 9, 6, 24, -10, -200, 37])); // 24

// more messy JavaScript code

=======
Answer: the first line of this code will log the reuturn value of the IIFE on lines 133 - 139, the largest value in an input array.  The reason 
a developer might want to do this, is so that they can avoid any variable naming conficts with the code above and below the code block.
>>>>>>> d790a9890a86da947c8f570ef5a4bdaeff57d5f5

9. Describe how object destructuring works using the following code:
let { foo, bar, qux } = obj;

Answer:

10. What does the following code log? Why?

let foo = [1, 2, 3, 4];
let [ bar, ...qux ] = foo;
console.log(bar); 
console.log(qux);

Answer:

11. Create two .js documents. One document should contain a "dummy function" that does nothing besides exporting that function
the other document imports the function. Why is this useful?

Answer:

12. Describe the following code and how it uses the throw, try, and catch keywords to manage erros:

class DivideByZeroError extends Error {}

function div(first, second) {
  if (second === 0) {
    throw new DivideByZeroError("Divide by zero!");
  }

  return first / second;
}

function divideOneBy(divisor) {
  try {
    let result = div(1, divisor);
    console.log(result);
  } catch (error) {
    if (error instanceof DivideByZeroError) {
      console.log(`${error.message} ignored`);
    } else {
      throw error;
    }
  }
}

divideOneBy(1);
divideOneBy(0);

Answer: If an erroneaous input is entered into the called function, like on the last line, the if block on line two will be called.
The if block creates a new error whos type is DivideByZeroError with an error message of "divide by zero!". When the div function is called on line 182
this error is returned and begins checking if it exists inside of a try block. Beucase it does, the code with the catch block will then be executed. The code checks 
what kind of error it is. If it's a divide by 0 error, the code will simply log the error to the console and continue executing. If the error is not a divide by zero error, then
it will re-throw the error. This is useful because a dividebyzero error isn't the only kind of error that this might encounter. Differentiating between different kinds of errors
allows the user to handle the errors appropriatly.

13. What is the side effect of this code?

function divideBy(numerator, denominator) {
  if (numerator === 0) {
    throw new Error("Divide by zero!");
  }

  return numerator / denominator;
}

Answer: The side effect in this code is that it thorws an error under a certain condition. This is a side effect because it uses the Error constructor to create and record a message
into a new error object. Error throwing in this case is a seperate behavior of this function that isn't directly related to the return value.

??MORE??
*/


/*
-------------------------------------------------TESTING WITH JEST-------------------------------------------------
1. Work through the excercises in the testing section of the course work

2. Write a test for fictional class called Animal:

Answer:

3. What command line commands would you use to check for code coverage?

Answer:

4. What is the SEAT approach? Describe it in detail.

Answer:

*/

/*
-------------------------------------------------Packaging Code-------------------------------------------------
  1. Describe the correct way to lay out a project directory:

  Answer:

  2. What are the devdependancies in this code and what do they do?
  {
  ...code...
  "devDependencies": {
    "@babel/cli": "^7.12.10",
    "@babel/core": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "eslint": "^7.19.0"
  }
}

Answer: 
*/