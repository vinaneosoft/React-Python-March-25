// forEach, map, reduce, find, filter

// arrays

let empnames=['vina','nupur','Kishor','Navin','Aman','arun'];

// iterate : for loop , for of 

for(let name of empnames){

}
// forEach

empnames.forEach((name, idx)=>console.log(name+" "+idx));

// find single employee starting with letter N/n; 
// find
console.log("---------");

let employeeFound=empnames.find((name)=>name.toUpperCase().startsWith('N'));
console.log(employeeFound);


// find  employees starting with letter N/n; 
let employeesFound=empnames.filter((name)=>name.toUpperCase().startsWith('N'));
employeesFound.forEach((name)=>console.log(name));

// chaining
// find  employees starting with letter N/n and iterate those
console.log("---------");
empnames
    .filter((name)=>name.toUpperCase().startsWith('N'))
    .forEach((name)=>console.log(name));
// convert all employee names in upper case : map
// map: mapping original value to new value
// new value it will be stored in new array
console.log("---------");
empnames
    .map((name)=>name.toUpperCase())
    .forEach(name=>console.log(name))

let mappedarr=empnames.map((name)=>name.toUpperCase());
console.log(mappedarr);

// reduce : n->1
// sum of array elements
let nums=[6,3,1,5,6];

let sum=nums.reduce((acc,num)=>acc+num);
// initial value acc=6, num=3  9
// acc=9, num=1   10
//acc=10, num=5   15
//...
let summ=nums.reduce((acc,num)=>acc+num, 10);
console.log(sum);
// inital value acc =10, num=6 16
//  acc=16, num=3  19
// acc=19, num=1   20
//acc=20, num=5   25
//...

// display names of emloyees in following format
// VNKNAA


let concatenation=empnames.reduce((acc,ename)=>acc+ename[0].toUpperCase(),"");
console.log(concatenation);

// initial value of acc = "" , ename=vina v V   V
// V, N    VN
//VN K  VNK
//...

let concatenation2=empnames.reduce((acc,ename)=>acc+"-"+ename[0].toUpperCase(),"").substring(1);
console.log(concatenation2);
