const { employees } = require('../data/zoo_data');

function isManager(id) {
  const managers = [];
  employees.map((employee) => employee.managers.forEach((element) => {
    if (!managers.includes(element)) {
      managers.push(element);
    }
  }));
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  const isPersonManager = isManager(managerId);
  if (isPersonManager === true) {
    const subordinates = employees.reduce((acc, curr) => {
      if (curr.managers.includes(managerId)) {
        acc.push(`${curr.firstName} ${curr.lastName}`);
      }
      return acc;
    }, []);
    return subordinates;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
