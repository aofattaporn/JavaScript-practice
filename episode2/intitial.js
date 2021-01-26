// I cac use comment massage by // or /* */
/* */
//  note : 
//  **1
// todo
//  !

// note : print = console.log();
console.log("test console.log : Hello world\n\n"); 

// note : สามา debuge เพื่อทำการ break point ได้ 
// debugger; // code will debug 

//  note : ในการกำหนดตัวแปร 
//  ! ทุกครั้งที่เรียก ใช้งานต้องมีการประกาศตัวแปรก่อน -> อาจจะไม่ต้องกำหนดค่าก่อนก็ได้ 
//  * ตัวแปรใน js เป็ร dynamic type

console.log("========VALUE====================="); // เป็น undefined 
var x = 1, y = 2; 
var z;
console.log("when I declare x value x =",x); // เป็น undefined 
console.log("undefinded value :",z); // เป็น undefined 
console.log("\n")

// note : ข้อมูล(litels) มี 2 แบบ 1. Primitive Data 2. Oblect
console.log("-----------> null and number ");
// !     primitive มี 6 แบบ 
// *     null, underfined, Number, String, Boolean, Symbol
// todo  null : เวลาใช้ตัวแปรเก็บชนิดข้อมูลเป็นobject เมื่อตัวแปรไม่มีการอ้าง object
// todo  undefind : การแสดงตัวแปรที่ไม่ได้กำหนดค่า 
console.log("tyeof null :",typeof null);
console.log("tyeof undefind :",typeof undefined);

console.log("-----------> number ");
// !    ใน js number จะมีสองแบบคือ integer / float 
console.log("I can write 200 * 10^5 : ", 200E5); // E is 10 
console.log("NoN(not a number) = 0/0 :", 0/0); // number is  not a number or cann't output num
console.log("-344 * infinity :", -2 * Infinity); // JS has infinity value 
console.log("NUM.MAX_VALUE  :",Number.MAX_VALUE); // ~1.7976931348623157e+308
console.log("NUM.MIN_VALUE) :",Number.MIN_VALUE); // ~5e-324


console.log("-----------> string ");
// !    ข้อมูลประเภท String ใน js ใช้ "" หรือ '' ก็ได้ 
console.log("\"Hello World\"") // if i want ro show "" ther can use \" in ""
console.log("'Hello world'")
console.log("propoty have :"+"1234567890".length); // length propoty 
// var str = "line 1\ 
// line 2";
// console.log(str)

console.log("-----------> boolean ");
// !    เป็นการแสดงต่าของ true or fals





