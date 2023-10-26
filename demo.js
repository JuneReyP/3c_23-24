// document.write('text from JS')
// alert('This is an alert message');
console.log('Hello JS')
document.getElementById('demo').innerHTML = Date();

/*
var
let
const
 */
// var num1 = '12';
// var num1 = 54;
// alert(num1)
// let num2 = 10
//     num2 = 12;
const num3 = true

/**
 
        JavaScript Operators
    Types of JavaScript Operators
There are different types of JavaScript operators:


    Arithmetic Operators
    Operator 	Description
            + 	        Addition
            - 	        Subtraction
            * 	        Multiplication
            ** 	        Exponentiation (ES2016)
            / 	        Division
            % 	        Modulus (Division Remainder)
            ++ 	        Increment
            -- 	        Decrement
    Assignment Operators
    Operator 	Example 	Same As
        = 	    x = y 	    x = y
        += 	    x += y 	    x = x + y
        -= 	    x -= y 	    x = x - y
        *= 	    x *= y 	    x = x * y
        /= 	    x /= y 	    x = x / y
        %= 	    x %= y 	    x = x % y
        **= 	x **= y 	x = x ** y
    Comparison Operators
     Operator 	Description
        == 	    equal to (1 == '1') true
        === 	equal value and equal type(1 === '1')  false
        != 	    not equal (1 != '1') false
        !== 	not equal value and not equal type (1 !== '1') true
        > 	    greater than
        < 	    less than
        >= 	    greater than or equal to
        <= 	    less than or equal to
        ? 	    ternary operator
    Logical Operators
        Operator 	Description
            && 	        logical and
                T && T  =  T
                T && F  =  F
                F && T  =  F
                F && F  =  F

                ex. ((1 == '1') && (1 !== '1'))  ((T)&&(T)) = T
            || 	        logical or
                T || T  =  T
                T || F  =  T
                F || T  =  T
                F || F  =  F
                
            ! 	        logical not
    Ternary Operators
    ?

    (condition)? ifTrue : ifFalse;


//  */
// let a = true;
// //alert(!a);

// function demo(){
//     // alert('This is a function');
//     var elemID = document.getElementById('demo');

//     elemID.style.backgroundColor = 'grey';
//     elemID.style.border = '1px solid';
// }

// function addTwoNum(num1, num2){
//     document.write(num1 + num2);
// }

// // addTwoNum(45, 5)

// function hello(fname, lname, address){
//     let myElem = document.getElementById('hello');

//     myElem.innerHTML = 'I am ' + fname + ' ' + lname + ' and I lived in ' + address;
// }

// function myFunction(){
//     let firstName = document.getElementById('fname').value;
//     let lastName = document.getElementById('lName').value;
//     let address = document.getElementById('address').value;

//     hello(firstName, lastName, address);
// }

/**
if
    if(condition){
        //code to be executed if the condition is true
    }
if else
if else-if else
switch case
    switch(expression){
        case 1:
            //code to be executed if the expression is 1
            break;
        case 2:
            //code to be executed if the expression is 2
            break;
        case 3:
            //code to be executed if the expression is 3
            break;
        default:
            //code to be executed if the expression is not 1 or 2 or 3
    }
for-loop
    for(initializer; condition; iterator){
        //codes to be executed if the condition is true
    }
while loop

 */

// if(1 > 0){
//     document.write("your codes if true");
// }

// if (1 > 0) {
//     document.write("your codes if true");
// } else {
//     document.write("your codes if false");
// }

// if (1 < 0) {
//     document.write("if 1st condition is true");
//     // if(){
//     //     if(){

//     //     }
//     // }
// } else if(1 < 0){
//     document.write("if 1st condition is false and 2nd condition is true");
// }else if(1 != 0 ){
//     document.write("if all condition are false");
// }else{

// }

// let exp = '';
// let num1 = 5;
// let num2 = 5;
// switch(exp){
//     case '+':
//         let total = num1 + num2
//         alert(num1 + num2);
//         if(total%2 == 0){
//             alert('Even NUmber')
//         }else(
//             alert("Odd number")
//         )
//         break;
//     case '-':
//         alert(num1 - num2);
//         break;
//     case '/':
//         alert(num1 / num2);
//         break;
//     case '*':
//         alert(num1 * num2);
//         break;
//     default:
//         'Invalid';
// }

// activity: Create a simple calculator that has a function for arithmethic operation using switch-case and functions

// indexed array
let cars = ["Honda", "Suzuki", "BMW"];

// document.write(cars[0] + ' ');
// document.write(cars[1] + ' ');
// document.write(cars[2] + ' ');

for(let i = 0; i < cars.length; i++){
    document.write(cars[i] + '<br>');
}

/**
 * i = 0
 *  cars[0] == Honda
 * 
 * i = 1
 *  cars[1] == Suzuki
 * i = 2
 *  cars[2] == BMW
 */