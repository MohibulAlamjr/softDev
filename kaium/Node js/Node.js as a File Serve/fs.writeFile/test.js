var fs = require('fs');

//create a file named mynewfile3.txt:
fs.writeFile('New.txt', 'Hello kaium!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
