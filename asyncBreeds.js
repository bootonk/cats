// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, returnData) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (error) returnData(undefined);
    if (!error) returnData(data);
  });
};

module.exports = breedDetailsFromFile;

