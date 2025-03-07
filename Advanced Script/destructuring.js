let arr1=[78,45,89,2];
let arr2=['hi','hello','welcome'];
let empinfo=[101, 'harish kumar', 78000, 'married'];

let empobj={
    empid:102,
    empname:'poona patil',
    empsalary:90000
}

let employeeId=empinfo[0];
let employeeName=empinfo[1];
let employeeSalary=empinfo[2];

/* array destructring */
let [eid, ename, esal]=empinfo;
console.log(eid);


/* object destructuring */