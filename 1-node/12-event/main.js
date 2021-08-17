const logger = require('./logger.js');
const emitter = new logger.Logger();

emitter.on('log', (event) => {
    console.log('emitter의 log 함수 감지')
    console.log(event);
});

emitter.log(() => {
    console.log('... doing something');
});