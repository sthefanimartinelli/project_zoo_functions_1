const { species, hours } = require('../data/zoo_data');

function getOfficeHours(allDays, daysAndAnimals) {
  const objVazio = {};
  allDays.forEach((day) => {
    objVazio[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: daysAndAnimals[day],
    };
  });
  objVazio.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return objVazio;
}

function getDaysAndAnimals() {
  const daysAndAnimals = [];
  species.forEach((specie) => specie.availability.forEach((day) => {
    if (!daysAndAnimals[day]) {
      daysAndAnimals[day] = [specie.name];
    } else {
      daysAndAnimals[day].push(specie.name);
    }
  }));
  return daysAndAnimals;
}

const getSchedule = (scheduleTarget) => {
  const allAnimals = species.map((specie) => specie.name);
  const allDays = Object.keys(hours);
  const daysAndAnimals = getDaysAndAnimals();
  if (allAnimals.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  } if (!allDays.includes(scheduleTarget) || !scheduleTarget) {
    return getOfficeHours(allDays, daysAndAnimals);
  }
  const day = ({ [scheduleTarget]: getOfficeHours(allDays, daysAndAnimals)[scheduleTarget] });
  return day;
};

module.exports = getSchedule;

// console.log(getSchedule('Monday'));
