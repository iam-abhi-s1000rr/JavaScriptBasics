//while loop
let i=0;
while(i<=5){
  console.log(i);
  i++;
}

console.log("-------------------------")

//do-while loop
let a=1;
do{
  console.log("Hello "+a);
  a++;
}while(a<=5);

console.log("-------------------------")


//for loop
for(let j=1;j<=9;j++){
  console.log(" Hello is "+j+" time");
  
}

console.log("-------------------------")

//for loop
for(let j=1;j<=9;j++){
  
  console.log(`Also we can write hello is ${j} time`)
}

let alien={name:'Human',
            planet:'earth',
            animal:{name1:'lion',
                    type:'carni',
                    terrian:'land'
          }          
}
console.log(alien)