function log(str) {
  console.log(str);
}

var foo = 42;
var foo = "bar";
var foo = true;

if ("test") {
  //true로 자동전환
  log("true");
}
log("2" + 2); // "22"
log(2 + 5 + "1"); // "71"

// 값
var a = 1;
var b = a;
b = 2;
console.log(a, b);

//참조
var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);

var a = { x: 1 };
var b = a;
b.x = 2;
console.log(a, b);

//call by value
function byValue(count) {
  count = count + 2;
}
var count = 3;
byValue(count);
log(count); //3

//call by reference
function byReference(count) {
  count.push("2");
}
var count = ["1"];
byReference(count);
log(count); // ['1', '2']

//if
isMan = true;
if (isMan) {
  log("i am man");
} else {
  log("am i woman?");
}

var gender = isMan ? "남자" : "여자";

//for
for (var count = 0; count < 5; count++) {
  //5 times
}
var obj = { a: 1, b: 2 };

//Slow
for (var prop in obj) {
  console.log(prop, obj[prop]);
}

//while
var isClosed = true;
while (isClosed) {
  //repeat

  //Closed = false;

  //break
  break;
}

//function
// function sum(x) {
//   var y = 1;
//   return x + y; //no return = undefined
// }
//same
// var sum = function () {
//   var y = 1;
//   return x + y;
// };

try {
  //if it catch the error move to catch
} catch (e) {
  //Only Error happend
} finally {
  //Must run
}

//Use frequency
// alert('alert');

// var who = prompt('Who R U?');
// var isDelete = confirm('R U SURE to DELETE?');
var enc = encodeURIComponent("카카오");
decodeURIComponent(enc);

isNaN("1"); //has number?
parseInt("12");
parseInt("09", 10);
parseFloat("10.33");

function test() {
  console.log("test()");
}

// var id = setTimeout(test, 1000); //1초후 1번 실행
// var id = setInterval(test, 1000) //1초마다 실행

//setInterval 보다 나은 방법
function test() {
  console.log("test()");
  setTimeout(test, 1000);
}

// clearTimeout(id);
// clearInterval(id);

//Scope
var nick = "aji"; //global

function test() {
  var age = 30; //local
  console.log(nick, age);
}

test();
// console.log(age); //error

//Hoisting
var name = "global";
function test() {
  console.log(name);
  var name = "local";
  console.log(name);
}

test2();
function test2() {
  console.log("test");
}

//function
var car = {
  year: "2022",
  starting: function () {
    console.log("starting..");
  },
};

car.starting();

//익명 함수표현식
var car = function () {};

//중첩함수
// function a(){
//   function b(){

//   }
// }

//익명 즉시실행함수, 스코프 보호, 외부라이브러리 에서 가져올때도 스코프 보호(변수명 중복 등등)
// (function() {

// })();

//생략 가능한 전달인자
// function sum(x, y) {
//   if (!y) y = 1;
//   console.log(x + y);
// }
// sum(3);

//가변 길이 전달인자
// function sum() {
//   var size = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     size += arguments[i];
//   }
//   console.log(size);
// }
// sum(1, 2, 3, 4, 5, 6, 7);

// function test(x, y){}
// console.log(test.length);
// test.count = 1; //static
// test.prototype;

//표현식
var name = "FE";
var age = 28;
var play = function () {};
var data = { company: "kakao" };
var fruits = ["사과", "바나나"];

//정규표현식
var text = "abc def ghi jkl abc def"; //대상 문자열
var testReg = /abc/; //찾을 문자열

var testresult = testReg.test(text);
console.log(testresult); //true
var matchresult = text.match(testReg);
console.log(matchresult); //["abc", index: 0, input: "abc def ghi jkl abc def"]
var replaceresult = text.replace(testReg, "가나다");
console.log(replaceresult);

/*특징*/
//팁 배열 복사
a = [1, 2, 3];
b = [...a];
b[0] = 1000;
console.log(a);
console.log(b);

//객체를 전달인자로 사용
// function area1(width, height) {
//   console.log(width * height);
// }
function area2(option) {
  console.log(option.width * option.height);
}
area2({ width: 300, height: 200 });

//기본 타입 래퍼 객체
var str = "jeju";
console.log(str.substring(0, 2)); //String 래퍼객체로 자동전환

var str = new String("jeju");
console.log(str + " jeju");

// var sums = 0;
// var counts = 0;
// var count = [10,20,30,40,50,60,70,80,90,100];
// count.forEach(element => {
//   sums += element;
//   counts += 1;
// });
// var result = sums / counts;
// log(result)

// for(i = 1; i < 10; i++){
//   for(j = 1; j < 10; j++){
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// function gogodan(i){
//     for(j = 1; j < 10; j++){
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// var Obj = {
//   do: function() {
//     console.log('Hello from Method');
//   }
// }

// var number1 = prompt('1번째 숫자');
// var number2 = prompt('2번째 숫자');
// alert(parseInt(number1) + parseInt(number2));
