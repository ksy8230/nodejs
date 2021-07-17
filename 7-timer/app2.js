// console.log('step2');
// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);
// console.log('step3');
// setImmediate(() => {
//     console.log('setImmediate');
// })
// console.log('step1');
// process.nextTick(() => {
//     console.log('nextTick');
// });


/**
 * time ~ timeEnd
 */

console.log('time 체크');
console.log('timeout0');
console.time('timeout 0');
setTimeout(() => {
    console.timeEnd('timeout 0');
    console.log('setTimeout 0');
}, 0);

for(let i = 0; i < 100; i++ ) {
    console.log('loop');
}