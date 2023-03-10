let num1=3;
let num2=9;
let num3=7;

if(num1>num2 && num2>num3){
  console.log("num2 is greater")
}else if(num2>num1 || num2.num3){
  console.log("num2 is greater")
}else{
  console.log("please check the condition")
}

let a=55;

//if(a%2==0) or if(a%2===0) both are same
if(a%2===0)
  result="Even"
else
  result="Odd"

console.log(result)

// ternary
result=a%2===0?"Even":"Odd"
console.log(result)

//Templete literal
let a1=5;
let b1=6;
let res=a1+b1;

console.log(`The addition of ${a1} and ${b1} is ${res}`);