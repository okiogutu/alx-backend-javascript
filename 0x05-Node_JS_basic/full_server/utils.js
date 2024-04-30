const fs = require('fs');

function locFinder(data) {
  const match = data.substring(data.lastIndexOf(',') + 1, data.length);
  return match;
}

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    const locArray = [];
    const studentArrayCS = [];
    const studentArraySWE = [];
    fs.readFile(path, 'utf8', (err, fd) => {
      if (err) {
        reject(Error('Cannot load the database'));
      }
      if (fd) {
        const lines = fd.split('\n');
        const modifiedArray = lines.slice(1, lines.length);
        modifiedArray.pop();

        for (const idx of modifiedArray) {
          if (idx.lastIndexOf(',')) {
            if (!locArray.includes(locFinder(idx))) {
              locArray.push(locFinder(idx));
            }
          }

          if (idx.includes(locArray[0])) {
            studentArrayCS.push(idx.substring(0, idx.indexOf(',')));
          }

          if (idx.includes(locArray[1])) {
            studentArraySWE.push(idx.substring(0, idx.indexOf(',')));
          }
        }
        const data = [studentArraySWE, studentArrayCS];
        resolve(data);
      }
    });
  });
}

module.exports = readDatabase;
