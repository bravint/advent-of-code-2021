const fs = require('fs');

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data = data.split("\n");
  let increaseCounter = 0;
  let previousWindow = 0;

  for (let i=2; i<data.length; i++) {
    let thirdValue = Number(data[i]);
    let secondValue = Number(data[i-1]);
    let firstValue = Number(data[i-2]);
    let currentWindow = (firstValue+secondValue+thirdValue);
    if (currentWindow > previousWindow && previousWindow) {
        increaseCounter++
        previousWindow = currentWindow;
    } else {
        previousWindow = currentWindow;
    }
  }
  console.log(increaseCounter);
})