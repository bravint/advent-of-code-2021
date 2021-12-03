const fs = require('fs');

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data = data.split("\n");
  let increaseCounter = 0;

  for (let i=0; i<data.length; i++) {
    let currentValue = Number(data[i]);
    let lastValue = Number(data[i-1]);
    if (currentValue > lastValue) {
        increaseCounter++;
    }
    }
    console.log(increaseCounter)
})