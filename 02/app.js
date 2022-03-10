/**
 * 02주차 실습
 *
 *
 * */
name = "austin";

isMan = true;
log(isMan);

function log(str) {
  console.log(str);
}

log("hello");

//Obj
var img = {};
img.width = 100;
img.height = 200;
log(img);
//arr
var arr = [1, 2, 3, 4, 5];
log(arr);

// 연산자
log(1 + 1);
log(name + " hello");

var me = {
  nick: "austin",
  age: "28",
  isMan: true,
  sayHello: function () {
    log("hello from Obj");
  },
};
me.sayHello();


// var name = 'FE';
// var age = 28;
// var message = 'hello ' + name;

//댓글갯수
// var commentCount = 20;
/*
동적으로 호출한 콘텐츠를 넣어줌
@auther FE
*/
// document.getElementById('wrap').innerHTML = content;

// var count = 5;
// var nick = "my nick is 'fe'";
// var homepage = 'www.kakaocorp.com';
// var isMan = true; // true | false
// console.log(nick == '');
// console.log(!!'test'); // true
// var log = function(str) {
//   console.log(str);
// }
// function log(str){
//   console.log(str);
// }
// log('hello')
// var image = {}; // image = new Object();
// image.width = 1;
// image.height = 2;
// image["width"] = 1; //연관배열
// image["name" + i] = "1.jpg"; //동적으로도 할당 가능
// image = { width: 1, height: 2 };

// image = [];
// image[0] = "1.jpg";
// image[1] = "2.jpg";
// image = ["1.jpg", 2, { name: "3.jpg" }];

// var nick = null;

// var nick; //undefined

// console.log(1 + 2); //3
// console.log("a" + "b"); //"ab"
// console.log(1 + "4"); // "14"
// "" == "0"; // false
// 0 == ""; // true
// false == "false"; // false
// false == "0"; // true
// false == undefined; // false
// false == null; // false
// null == undefined; // true
// " \t\r\n" == 0; //true

// if (isHero && isHulk) {
//   //둘다 참일 경우 실행
// }
// if (isHero || isHulk) {
//   //하나라도 참일 경우 실행
// }
// if (!isHero) {
//   //영웅이 아니라면
// }

// var image = {width: 1, height: 2};
// console.log('width' in image); //true
// console.log('size' in image);
// console.log('toString' in image);
// delete image.width;
// image.width = null; //value만 지우고 프로퍼티는 남겨둠
// console.log(typeof (1+ '4'));
// typeof foo !== 'undefined';
// var arr = [1,2,3];
// console.log(a instanceof Array); //true
