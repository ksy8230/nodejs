function hello() {
  console.log(this);
  console.log(this === global);
}

hello();

/**
 * 클래스 외부에서 사용된 함수 안의 this는 글로벌
 * 클래스 내부에서 사용된 this는 클래스 자체
 */

console.log("--global scope--");
console.log(this);

/**
 * 함수도 클래스 내부도 아닌 바깥 this는 module.exports를 가르킨다
 */

console.log(this === module.exports);
