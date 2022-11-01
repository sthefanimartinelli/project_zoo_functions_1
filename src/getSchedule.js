const { species, hours } = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => {
  const allAnimals = species.map((specie) => specie.name);
  const allDays = Object.keys(hours);
  if (allAnimals.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  } if (allDays.includes(scheduleTarget)) {
    const opening = hours[scheduleTarget].open;
    const closing = hours[scheduleTarget].close;
    if (scheduleTarget === 'Monday') {
      return ({ Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } });
    } return ({ scheduleTarget: { officeHour: `Open from ${opening}am until ${closing}pm`, exhibition: 0 } });
  }
};

// {
//   'Tuesday': {
//     'officeHour': 'Open from 8am until 6pm',
//     'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//   },
// };

module.exports = getSchedule;

console.log(getSchedule('Tuesday'));

// {
//   Tuesday: { // Dia da semana
//     officeHour: 'Open from 8am until 6pm', // n
//     exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//   },
//   Wednesday: {
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
//   },
//   // [...]
// }

// Retorne todos os horários disponíveis para cada dia da semana caso a função:

// - não receba parâmetro;

// - o parâmetro passado para a função não seja um animal ou um dia;
// Para isso:

// Crie um objeto e adicione todos os dias da semana como chave;

// Os valores de cada dia da semana deve ser um objeto, possuindo as chaves officeHour e exhibition:

// officeHour deve possuir o texto com o horário que o zoológico abre e fecha naquele dia da semana;

// exhibition deve possuir um array com o nome de todos os animais disponíveis para visitação naquele dia da semana.
