var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('New.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Success');
});