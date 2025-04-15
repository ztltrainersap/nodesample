console.log("Hello and Welcome to CAP training"); //javascript testing
var x=10;
console.log(x); //print on console

//Array with json by Kumud
var employeerecords=
[
    {
        "employeename": "Kumud",
        "emplyeeID": "001",
        "empDesc": "DM" //myjson
    },
    {
        "employeename": "Mamatha",
        "emplyeeID": "002",
        "empDesc": "AM"
    },
    {
        "employeename": "Naveen",
        "emplyeeID": "003",
        "empDesc": "Director"
    }
];

console.log(employeerecords[1].emplyeeID);

//Types of brackets

//types of brackets
// curlybrackets : {}
// parenthesis : ()
// Array : index []

var array=["Delhi","Mumbai","Hyderabad"];
var arrayStates=["Maharashtra","Chennai","Telangana"];

var printf=function(array){
    for(let i=0;i<array.length;i++){
        const element=array[i];
        console.log(element);
    }
}
var v1=10;
var v2=20;

var add=function(v1,v2){
    return v1+v2;
}

const sum=(v1,v2)=>v1+v2;
console.log(sum(20,40));

var sub=function(v1,v2){
    return v1-v2;
}
console.log(add(10,20));
console.log(sub(20,10));
console.log(array);
console.log(arrayStates);

