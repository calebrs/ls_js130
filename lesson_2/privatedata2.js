function makeList() {
  let items = [];

  return {
    // items: [], -- this line removed

    add: function(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + " added!");
      }
    },

    list: function() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    },

    remove: function(item) {
      let index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item + " removed!");
      }
    },
  };
}

let newItem = makeList();
newItem.add('Eat food');
console.log(makeList.items); // you cannot acess variables inside the closure!