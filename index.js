//Write your solution in this file!
let employee = { name: "Horatio", streetAddress: "1600 Pennsylvania Ave" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let employeeCopy = {...employee}
    employeeCopy[key] = value;
    return employeeCopy
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let employeeCopy = {...employee};
    delete employeeCopy[key];
    console.log(employeeCopy)
    return employeeCopy
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}