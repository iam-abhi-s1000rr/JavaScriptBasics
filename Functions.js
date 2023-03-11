
//defining fuction
function greet(){
  console.log("Hello World !");
}

//calling a function
greet();

function multipleGreet(){
  for(let i=0;i<5;i++){
    console.log("Hello User!"+" greet no-->  "+i);
  }
}

multipleGreet();

console.log("----------------------------------------")

//function with return type and input parameters

let user="Abhishek"
function greetWithUserName(user){
  return `Hello ${user}`;
}

let greetName=greetWithUserName(user);
console.log(greetName);

// as the function  greetWithUserName() is returning something we need to store it
console.log("----------------------------------------")

//Function Expression

let add=function(num1,num2){
  return num1+num2;
}

let result=add(5,4);

console.log(result);
//also we can assign 
let sum=add;
let result1=sum(5,4);
console.log(sum);
console.log(result1);

console.log("----------------------------------------")

//default value

function add1(num1,num2,num3=1){
  console.log(num1,num2,num3);
  return num1+num2+num3;
}

// here default value of num3=1, so when we dont add the value then default value is selected
let res=add1(2,3,5);
console.log(res);

let res1=add1(2,3);
console.log(res1);

console.log("----------------------------------------")

//Arrow Function

let addFunc=(num1,num2)=>{

  return num1+num2;
}

let addFuncRes=addFunc(4,5);

console.log(addFuncRes);

console.log("----------------------------------------")


//Methods--> Method is combination for Function & Object
//
//
//
console.log("----------------------------------------")

let laptop={brand:"Dell",
          processor:"i9",
          ram:"64gb",
          addSum:function(n1,n2){
              return n1+n2;
          }
}

//as our addSum is under laptop object we need to call laptop.addSum()
// addSum returns some value and that value needs to be stored in some varible so we created a variable and stroed thoses values in that variable
let myResult=laptop.addSum(2,4);
console.log(myResult);

console.log("----------------------------------------")