// Write your solution in this file!
const employee = {
    name: "Javi Lopez",
    streetAddress: "123 Main St"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
return {
    ...employee,
    [key]:value
};
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, updateEmployeeWithKeyAndValue) => {
    employee[key] = updateEmployeeWithKeyAndValue;
    return employee;
};


const deleteFromEmployeeByKey = (employee, key) => {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}