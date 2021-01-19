// function map(array, callback) {
//   let result = [];

//   for (let index = 0; index < array.length; index += 1) {
//     let newValue = callback(array[index]);
//     result.push(newValue);
//   }

//   return result;
// }

//using reduce
function map(array, callback) {
  return array.reduce((accum, value) => {
    accum.push(callback(value));
    return accum;
  }, [])
}



//tests
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]