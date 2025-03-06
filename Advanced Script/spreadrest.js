
const add=(...nums)=>nums.reduce((acc,num)=>acc+num,0);

console.log(add(12,45));
console.log(add(12,45,34));
console.log(add(12));
console.log(add(12,45,78,90));
console.log(add(12,45,3,4,45,6,7,7));
console.log(add(12,45,78,90,2));
console.log(add());

let ages=[2,3,1,4,5];
console.log(add(...ages));

// copy ages array into new array
let ages2=ages;  // no copy

let ages3=[...ages, 78, 79]; // copy and new addition
console.log(ages3);

// while copying array update

let emp={
        empid:234,
        empname:"poonam",
        empsalary:678998998
}
let emp2=emp; // no copy 
let emp3 = {...emp}; // copy
console.log(emp3);

// while copying we will update, 
let emp4={...emp, empname:"pooja"};
console.log(emp4);

// while copying adding new key value
let emp5={...emp, empname:"pooja", experience:20};
console.log(emp5);


/* let empp={
        empid:567,
        empname:{
                firstname:"vina",
                lastname:"patil"
        }
} */


let employees=[
        {
         empid:234,
         empname:"vina",
         empsalary:678998998
        },
        {
                empid:235,
                empname:"gopal",
                empsalary:5600000
        },
        {
                empid:236,
                empname:"kirti",
                empsalary:45000
        }
]

let newobj=null;
employees.find((emp, index)=>{
     if(index==1)  {
        console.log("in if");
                console.log(emp);
                newobj= {...emp,empsalary:6700000}; // new memory location
              // console.log(newemp);
               return newobj;
     }
     
})
console.log("------");

console.log(newobj);

console.log(employees);

