const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback = (args) => {
    console.log(args);
};

emitter.on('sy', callback);

emitter.emit('sy', {message: 1});
emitter.emit('sy', {message: 2});
emitter.removeAllListeners();
emitter.emit('sy', {message: 3});