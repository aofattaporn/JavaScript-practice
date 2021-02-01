// note : decralation function (sub-program)
// !  keyword : function function_name(parameter){ ( code block )}
console.log("==============SUB-PROGRAM================")
function calculate(params1, params2) {
    return params1 * params2;
}
function myFunction() { 
    console.log("print : myFunction"); 
}
// function (params1, params2) { 
//     return params1 * params2;
// } function anonymous function 

var calculate2 = function (param1, param2) { 
    return param1 * param2;
}
var calculate3 = function calculate4 (param1, param2 ) { 
    return param1 * param2;
}

// todo การลองสร้าง finction 
var result = calculate(10, 2);
console.log("calculate(10, 2) :", result);

// todo การลองสร้าง finction โดยไม่ return ค่า 
var result2 = myFunction(); 
console.log(result2);

// todo นิพจน์ของ function 
console.log(calculate2(10, 2));

console.log(calculate3(10,2));


