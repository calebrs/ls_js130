function myFunc(first, middle1, middle, middle2, last) {
  return {
    first,
    last,
    middle: [middle1, middle, middle2].sort(),
  }
}

let arr = [1, 2, 3, 4, 5];
let {first, middle, last} = myFunc(...arr);