var fs = require('fs');

fs.writeFile('write2.txt', 'In sha Allah we will!', function (err) {
  if (err) throw err;
  console.log('Complete');
});
