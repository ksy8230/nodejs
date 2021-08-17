let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

// module.exports로 바깥으로 꺼내고 싶은 함수를 연결
module.exports.getCount = getCount;
module.exports.increase = increase;

// exports.increase = increase;
// 위처럼 module은 생략 가능하지만 권장하진 않는다

console.log(module.exports === exports); // true
exports = {};
console.log(module.exports === exports); // false
/**
 * export에 빈 값을 할당하면 module.exports와 완전히 다른 객체가 되어버리기 때문이다
 */
