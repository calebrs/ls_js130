"use strict";

function later(func, funcArg) {
  return function() {
    func(funcArg);
  }
}

function later2(func, funcArg) {
  return function(arg) {
    func(funcArg, arg)
  }
}

function bind(context, func) {
  return function() { // this return function's closure has a reference to the context variable
    func.call(context);
  }
}


let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }