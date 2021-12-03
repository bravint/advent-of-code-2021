const fs = require('fs');

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  data = data.split('\n');

  let gamma = getRate (data, 'gamma')
  let epsilon = getRate (data, 'epsilon')

  console.log ('Power consumption of the submarine =',gamma*epsilon)
})

let count1 = 0;
let count0 = 0;

function getRate (data, type) {
  let str ='';
  for (i=0; i<data[0].length; i++){    
    count1 = 0;
    count0 = 0;
    counter (data, i);
    if (type == "gamma") {
      count1 > count0 ? str +='1': str +='0';
    } else {
      count1 > count0 ? str +='0': str +='1';
    } 
  }
  return(parseInt(str ,2));
}

function counter (data, index) {
  for (let i=0; i <data.length; i++) {
    if (parseInt(data[i].charAt(index)) === 1) {
       count1 ++;    
    } else if (parseInt(data[i].charAt(index)) === 0) {
       count0 ++;
    }  
  }
}