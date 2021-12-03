const fs = require('fs');

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  data = data.split(/\n| /);

  let forward = 0;
  let down = 0;
  let up = 0;

  for (let i = 0; i<data.length; i+= 2) {
    let dir = data[i];
    let steps = data [i+1];
    if (dir == "forward") {
        forward += parseInt(steps);
    } else if (dir =="down") {
        down += parseInt(steps);
    } else if (dir =="up"){
        up += parseInt(steps);
    }
  }
  console.log('Final horizontal position multiplied by final depth =',forward*(down-up)); //1480518
})