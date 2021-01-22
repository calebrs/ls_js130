"use strict";

// function makeList() {
//   let items = [];

//   return function(item) {

//     if (!item) {
//       if (items.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         console.log(items.join(', '));
//       }
//     } else if (items.includes(item)) {
//       items.splice(items.indexOf(item), 1);
//       console.log(`${item} removed!`)
//     } else if (!items.includes(item)) {
//       items.push(item);
//       console.log(`${item} added!`);
//     }
//   }
// }

function makeList() {
  let items = [];
  
  return {

    add: function(item) {
      items.push(item);
      console.log(item + ' added!');
    },

    remove(item) {
      items.splice(items.indexOf(item), 1);
      console.log(item + ' removed!');
    },

    list() {
      items.forEach(item => console.log(item));
    }
  }
}

let newList = makeList();
newList.add('make food');
newList.list();
newList.remove('make food');

// newList('make breakfast');
// newList('make bed');
// newList();
// newList('make breakfast');