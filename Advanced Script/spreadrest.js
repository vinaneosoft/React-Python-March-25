
const add=(...nums)=>nums.reduce((acc,num)=>acc+num,0);

console.log(add(12,45));
console.log(add(12,45,34));
console.log(add(12));
console.log(add(12,45,78,90));
console.log(add(12,45,3,4,45,6,7,7));
console.log(add(12,45,78,90,2));
console.log(add());
