// dynamically typed lang

function test(){
    // body of function
}
test();

const addfun=function(a,b){
    return a+b;
}
addfun(23,56);


// arrow function
const arrowfun=    ()=>{
    // body
}

arrowfun();

const squareFun=(num)=>{
    console.log(num*num);
}
squareFun(2);
// inline
// arrow function with return stmt
// arrow function inline but returing a value

// 1. single stmt : {} optional
//2.  single parameter : () optional
const squareFun2=num=> console.log(num*num);

// 3. single return stmt : {} optional, return keywd remove, automatic return
const squareFun3=num=>num*num

let result=squareFun3(7);console.log(result)

console.log(squareFun3(4));
