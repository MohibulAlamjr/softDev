var fs = require('fs');

fs.appendFile('Append2.txt', 'Game Over!', function (err) {
  if (err) throw err;
  console.log('Done!');
});
