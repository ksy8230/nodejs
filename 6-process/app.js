const process = require("process");


setTimeout(() => {
    console.log('setTimeout');
}, 0);

process.nextTick(() => {
    console.log('nextTick');
});

for(let i = 0; i <100; i++ ){
    console.log('loop');
}

/**
 * nextTick은 태스크큐에 다른 콜백함수가 들어있어도 순서를 무시하고 제일 우선순위를 높여서 먼저 수행
 */