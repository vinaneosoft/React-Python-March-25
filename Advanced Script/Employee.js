class Employee{
    empId; empName;
    constructor(empId,empName){
        this.empId=empId;
        this.empName=empName;
    }
}


let e1=new Employee(1,'poonam');
let e2=new Employee(2,'kishor');

let employees=[e1,e2];
console.log(employees);

let obj=employees.find(emp=>emp.empId==5);
console.log(obj); // undefined
