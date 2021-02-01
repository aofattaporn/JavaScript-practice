// note : Function 
// ! function ไร้ชื่อ (Anonymous Function) 
// //function ใน js ถือว่าเป็นข้อมูลประเภท object 
var calcurate = function (param1, param2) { 
    return param1 * param2;
}
console.log(calcurate(10, 2)); // เป็นการเรียกใช้ function จาก ตัวแปรชื่อ calcurate

// note : function call back 
// ! function ที่นำไปเป็นค่า argrument ได้ 
// //function callback คือ function ที่ถูกใช้งานกลับ 
// todo เช่น function_sayHi() function_sayBye()
function sayHi() { 
    console.log("Hi"); 
}
function sayBye() { 
    console.log("Bye");
}
function say(func) { 
    func();
}
say(sayHi);
say(sayBye);

// note : return_function 
