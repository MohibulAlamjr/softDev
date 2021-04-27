var fs = require('fs');

fs.open('open1.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Done');
});