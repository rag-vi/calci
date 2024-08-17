function addition(a,b) {
    c = a+b
    return c
}
function subtraction(a,b){
    c=a-b
    return c
}
function multiple(a,b){
    c=a*b;
    return c 
}
function division(a,b){
    c=a/b;
    return c
}


var x = prompt("Enter a Value", "x");
var y = prompt("Enter a Value", "y");

var num1 = parseInt(x);
var num2 = parseInt(y);

let caluculator=prompt("enter 1 for addition \n enter 2 for subtraction \n enter 3 for multiply \n enter 4 for division");

if(caluculator==1){


console.log("Here is addition of x and y", addition(num1, num2));}
else if(caluculator==2)
{
console.log("Here is subtraction of  x and y ", subtraction(num1,num2));}
else if(caluculator==3){
console.log("Here is multiplication of  x and y ", multiple(num1,num2));}
else if(caluculator==4){
console.log("Here is dvision of  x and y ", division(num1,num2));}
else
{
    console.log("not found");
}
