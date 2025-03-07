let arr1=[78,45,89,2];
let arr2=['hi','hello','welcome'];
let empinfo=[101, 'harish kumar', 78000, 'married'];


let employeeId=empinfo[0];
let employeeName=empinfo[1];
let employeeSalary=empinfo[2];

/* array destructring */
let [eid, ename, esal]=empinfo;
console.log(eid);


let book={
    bookId:344,
    bookName:"Learn React Easy",
    bookType:'Technical'
}
// store value of each key of an object into seperate variable

let bid=book.bookId; //bid=344
let bname=book.bookName; 
let btype=book.bookType; 

/* object destructuring : object key names == variable names*/

let {bookId, bookName, bookType}= book;
console.log(bookId); // normal variable
//console.log(book.bookId); // key


let  persons=[
    {
        pid:676889,
        pname:'mohan',
        page:56
    },
    {
        pid:77777,
        pname:'soham',
        page:45
    }
]

let [person1, person2]=persons; // array de

var {pid:id, pname:name, page:age}=person1; // with alias
console.log(id);
var {pid, pname, page}=person2;
console.log(pid);

empinfo=[101, 'harish kumar', 78000, 'married'];
// store id and name in seperate variables and rest all info in another array
// destr, rest

let [idd,nname, ...arr]=empinfo;
console.log(idd);
console.log(nname);
console.log(arr);

/* skipping values while destructuring */

let [eeid,,eesal]=empinfo;
console.log("-------------");
console.log(eeid);
console.log(eesal);



