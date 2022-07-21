// Write your solution in this file!
let employee={
    name:"john",streetAddress:"victoria street"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
 let newemployeeObject={...employee};
newemployeeObject[key]=value;
return newemployeeObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
employee[key]=value;
return employee;
}
function deleteFromEmployeeByKey(employee,key){
 let newemployeeObject={...employee};
delete newemployeeObject[key];
return newemployeeObject;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
delete employee[key];
return employee;
}