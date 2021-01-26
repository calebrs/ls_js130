let password = (function() {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890' //36
  let result = '';
  for (let char = 0; char < 16; char += 1) {
    let randomIndx = Math.floor(Math.random() * 36);
    result += chars[randomIndx];
  }
  return result;
})();

console.log(password);