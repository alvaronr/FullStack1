let events = require('events');
var eventEmitter = new events.EventEmitter();

let alarmHandler = () => {
    console.log("Alarm has been triggered!")
}

let handlerResponse = () => {
    console.log("Call 911!")
}

//Event 'alarm'
eventEmitter.on('alarm', alarmHandler)
            .on('call911', handlerResponse);
  eventEmitter.emit('alarm');
  eventEmitter.emit('call911');