// Write your solution in this file

const employee = {
    name :"Eliza",
    streetAddress: {
        city: 'naks',
        zip: '1234'
    }
}
//code to non destructivly update an object
function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

const newObject = updateEmployeeWithKeyAndValue(employee,"name","suzi");

newObject.name;

//code to destructively update an obj

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]= value;
    return obj;
}

const destructedObj = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name","Liss");
destructedObj.name;

// deletes a property from an obj nondestructively

function deleteFromEmployeeByKey(obj,key){
    const newObj = {...obj}
    delete newObj[key];
    return newObj;
}
const delObj = deleteFromEmployeeByKey(employee,"name",);
delObj;

// deletes a property from an obj destructively
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;

}
const desDelObj = destructivelyDeleteFromEmployeeByKey(employee, "name");
desDelObj;

