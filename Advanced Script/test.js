const numbers=[1,5,3,9,2];
numbers.reduce((acc, currentvalue)=>{
   // console.log("acc:"+acc);
    console.log("current:"+currentvalue);
    if(currentvalue>acc)
        acc=currentvalue;
    console.log("acc:"+acc);
    return acc;
})

const finalresult=numbers.reduce((acc, currentvalue)=>currentvalue>acc?currentvalue:acc);