(function countdown(num) {
  console.log(num);
  if ((num - 1 > 0)) {
    countdown(num - 1);
  }
})(7)