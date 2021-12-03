const fs = require('fs');

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  data = data.split('\n');

  let oxygenGenerator = rating (data, 0, 'o2');
  let carbonScrubber = rating (data, 0)

  console.log('Life support rating of the submarine =',oxygenGenerator*carbonScrubber)
})

let ratings = 0;

function rating (data, index, type) {
    let newData = [...data];
    let arrOne =[];
    let arrZero = [];

    for (let i=0; i < newData.length; i++) {
        if (newData.length > 1) {
            if (parseInt(newData[i].charAt(index)) === 1) {
                arrOne.push(newData[i]);    
                } else if (parseInt(newData[i].charAt(index)) === 0) {
                arrZero.push(newData[i]);
            }  
        } else {
            return ratings = (parseInt(newData[0], 2));
        } 
    } 
    
    if (type == 'o2') {
        arrOne.length >= arrZero.length ? rating (arrOne, index+1, 'o2') : rating (arrZero, index+1, 'o2');
    } else {
        arrOne.length >= arrZero.length ? rating (arrZero, index+1) : rating (arrOne, index+1);
    }

    return ratings;
}