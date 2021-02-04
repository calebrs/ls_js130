function startCounting() {
  let count = 0;
  let id = setInterval(function() {
    count += 1;
    console.log(count);
  }, 1000)

  return id;
}

function stopCounting(id) {
  clearInterval(id);
}

startCounting();

