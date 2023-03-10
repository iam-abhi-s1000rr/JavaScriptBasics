let x=7, y=8, z=9

let result=(x>y && y>z)
console.log(result)

console.log("--------------------")

let result2=(x<y && y>z)
console.log(result2)

console.log("--------------------")

let result3=(x>y || y>z)
console.log(result3)

console.log("--------------------")

let result4=(x>y || y>z && z<x || z>x)
console.log(result4)

console.log("--------------------")