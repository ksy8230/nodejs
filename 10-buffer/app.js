// Fixed-size chuck of memory
// array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2); // 버퍼 초기화
const buf3 = Buffer.allocUnsafe(2);
console.log(buf2);
console.log(buf3);

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString())