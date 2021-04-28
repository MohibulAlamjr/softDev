var events = require('events');
var rs = new events.EventEmitter();

//Create an event handler:


//Assign the eventhandler to an event:
rs.on('scream', function () {
    console.log('I hear a scream!');
  });

//Fire the 'scream' event:
eventEmitter.emit('scream');
