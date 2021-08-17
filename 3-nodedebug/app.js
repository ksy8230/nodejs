function sayHello () {
    console.log('sayHello!');
    console.log('sy!!');
    console.log('sss!!')
}

function calculate(x,y) {
    console.log('calculating...');
    const result = x + y;
    console.log('result = ', result);
    sayHello();
    return result;
}

calculate(2,2);

const stop = 4;
console.log('... loop ...');
for(let i = 0; i < 10; i++) {
    console.log('count', i);
    if (i === stop) {
        break;
    }
}