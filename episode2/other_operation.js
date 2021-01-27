// note : Operators typof() 
// // มีไว้ตรวจสอบค่าที่เก็บมีข้อมูลชนิดไหน 
console.log("========typeof-test================");
console.log("5   :", typeof(5));
console.log("\"5\" :", typeof("5"));
console.log("0\\0 :", typeof(2/0));
console.log("null :", typeof(null));
console.log("null :", typeof(Math.sqrt));
console.log("");

// note : Operators void 
// // void ทำให้นนิพจน์วางไว้ด้านหลัง ทำงานปกติ 
// !! operators จะส่งผลลัพธ์กลับออกมาเป็น undefined 
console.log("========Void-operators================");
var a = void 12;
console.log("void a :",a); 
var b = 1; 
console.log("void(++b) :",void(++b)); // todo เมื่อประกาศ void จะคืนค่าเป็น undefind 
console.log("b :", b); // todo มีการบวกในบรรทัดก่อนหน้าที่เป็น void
console.log("");


// note : Arrays 
// ! เป็นชนิดข้อมูล object ดดยข้อมูลเรียงต่อกัน
// todo มีพร๊อพเพอร์ตี้ ชื่อ length ในการหาจำนวนสมาชิก
console.log("========Arrays==============")
var a = ["num1", "num2", "num3", "num4",]; 
console.log("a[0] :", a[0]);
console.log("a[4] :", a[4]);
a[9] = 100; 
console.log("a.length :", a.length); // todo เป็นการเพิ่มขนาด array ดดยการแก้ไข length ได้ 



