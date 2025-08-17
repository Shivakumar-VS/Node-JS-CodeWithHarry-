const e = require('events')

class MyEnitter extends e {}
const myEnitter = new MyEnitter();

myEnitter.on('event', ()=>{
    console.log('an event occured');
})
myEnitter.emit('event');
