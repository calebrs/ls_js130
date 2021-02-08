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

7. Write your own example of creating private data using closure. Describe how the data is private

Answer:

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

Answer:

13. What is the side effect of this code?

function divideBy(numerator, denominator) {
  if (numerator === 0) {
    throw new Error("Divide by zero!");
  }

  return numerator / denominator;
}

Answer:

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