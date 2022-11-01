const { employees } = require('../data/zoo_data');

function getEmployeesCoverage(informationObj) {
  if (informationObj.name) {
    const employeeObj = employees.find((employee) => (employee.firstName === informationObj.name));
    return employeeObj;
  }
  if (informationObj.id) {
    return 'bleh';
  }
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
