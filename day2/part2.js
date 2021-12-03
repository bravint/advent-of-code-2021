const fs = require('fs');

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data = data.split(/\n| /);

  let forward = 0;
  let aim = 0;
  let depth = 0;

  for (let i = 0; i<data.length; i+= 2) {
    let dir = data[i];
    let steps = data [i+1];

    if (dir == "forward") {
        depth += (aim*steps);
        forward += parseInt(steps);
    } else if (dir =="down") {
        aim += parseInt(steps);
    } else if (dir =="up"){
        aim -= parseInt(steps);
    }
  }
  console.log('Final horizontal position multiplied by final depth =',forward*depth) //1282809906
})