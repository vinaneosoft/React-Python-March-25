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