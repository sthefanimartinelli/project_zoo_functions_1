const { employees, species } = require('../data/zoo_data');

function nameInfos(infoObj) {
  const allFirstNames = employees.map((employee) => employee.firstName);
  const allLastNames = employees.map((employee) => employee.lastName);
  if (allFirstNames.includes(infoObj.name) || allLastNames.includes(infoObj.name)) {
    const employeeObj = employees.find((employee) => (employee.firstName === infoObj.name
    || employee.lastName === infoObj.name));
    const speciesNames = employeeObj.responsibleFor
      .map((id) => species.find((specie) => specie.id === id).name);
    const locationsOfSpecies = speciesNames
      .map((name) => species.find((specie) => specie.name === name).location);
    return {
      id: employeeObj.id,
      fullName: `${employeeObj.firstName} ${employeeObj.lastName}`,
      species: speciesNames,
      locations: locationsOfSpecies,
    };
  }
  throw new Error('Informações inválidas');
}

function idInfos(infoObj) {
  const allIds = employees.map((employee) => employee.id);
  if (!allIds.includes(infoObj.id)) {
    throw new Error('Informações inválidas');
  }
  const employeeObj = employees.find((employee) => (employee.id === infoObj.id));
  const speciesNames = employeeObj.responsibleFor
    .map((id) => species.find((specie) => specie.id === id).name);
  const locationsOfSpecies = speciesNames
    .map((name) => species.find((specie) => specie.name === name).location);
  return {
    id: employeeObj.id,
    fullName: `${employeeObj.firstName} ${employeeObj.lastName}`,
    species: speciesNames,
    locations: locationsOfSpecies,
  };
}

function allInfos() {
  const employeeId = employees.map((employee) => employee.id);
  const arrayVazio = [];
  employeeId.forEach((id) => {
    const employeeObj = employees.find((employee) => (employee.id === id));
    const speciesNames = employeeObj.responsibleFor
      .map((animalId) => species.find((specie) => specie.id === animalId).name);
    const locationsOfSpecies = speciesNames
      .map((name) => species.find((specie) => specie.name === name).location);
    const eachObj = {
      id: employeeObj.id,
      fullName: `${employeeObj.firstName} ${employeeObj.lastName}`,
      species: speciesNames,
      locations: locationsOfSpecies,
    };
    arrayVazio.push(eachObj);
  });
  return arrayVazio;
}

function getEmployeesCoverage(infoObj) {
  if (!infoObj) {
    return allInfos();
  }
  if (infoObj.name) {
    return nameInfos(infoObj);
  }
  if (infoObj.id) {
    return idInfos(infoObj);
  }
}

module.exports = getEmployeesCoverage;

console.log(getEmployeesCoverage());
