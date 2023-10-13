// document.write('text from JS')
// alert('This is an alert message');
console.log('Hello JS')
document.getElementById('demo').innerHTML = Date();

/*
var
let
const
 */
var num1 = '12';
// var num1 = 54;
// alert(num1)
let num2 = 10
    num2 = 12;
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


 */
let a = true;
//alert(!a);

function demo(){
    // alert('This is a function');
    var elemID = document.getElementById('demo');

    elemID.style.backgroundColor = 'grey';
    elemID.style.border = '1px solid';
}

function addTwoNum(num1, num2){
    document.write(num1 + num2);
}

// addTwoNum(45, 5)

function hello(fname, lname, address){
    let myElem = document.getElementById('hello');

    myElem.innerHTML = 'I am ' + fname + ' ' + lname + ' and I lived in ' + address;
}

