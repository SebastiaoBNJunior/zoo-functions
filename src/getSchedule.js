const data = require('../data/zoo_data');

// --------------------------------------------------------

const returnScheduleByAnimal = (scheduleTarget) => data.species
  .find(({ name }) => name === scheduleTarget);
console.log(returnScheduleByAnimal('lions'));

// -------------------------------------------------------------------

const verifyAvaliability = (weekd) => data.species
  .filter(({ availability }) => availability.includes(weekd))
  .map(({ name }) => name);
console.log(verifyAvaliability('Monday').length);

// -------------------------------------------------------------------

const returnScheduleByWeekDay = (weekd) => {
  if (weekd === 'Monday') {
    return {
      [weekd]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return {
    [weekd]: {
      officeHour: `Open from ${data.hours[weekd].open}am until ${data.hours[weekd].close}pm`,
      exhibition: verifyAvaliability(weekd),
    },
  };
};
console.log(returnScheduleByWeekDay('Monday'));
console.log(data.hours['']);

// -------------------------------------------------------------------

const fullSchedule = ({
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: verifyAvaliability('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: verifyAvaliability('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: verifyAvaliability('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: verifyAvaliability('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: verifyAvaliability('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: verifyAvaliability('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },

});
console.log(fullSchedule);

const getSchedule = (scheduleTarget) => {
  if (returnScheduleByAnimal(scheduleTarget)) {
    return returnScheduleByAnimal(scheduleTarget).availability;
  }
  if (verifyAvaliability(scheduleTarget).length !== 0 || scheduleTarget === 'Monday') {
    return returnScheduleByWeekDay(scheduleTarget);
  }
  if (verifyAvaliability(scheduleTarget).length === 0) {
    return fullSchedule;
  }
};
console.log(getSchedule('Monday'));
console.log(getSchedule('lion'));

module.exports = getSchedule;
