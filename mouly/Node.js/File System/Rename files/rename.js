var fs = require('fs');

fs.rename('rename.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 