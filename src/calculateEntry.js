const data = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  child: entrants.filter((entrant) => entrant.age < 18).length,
  adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
  senior: entrants.filter((entrant) => entrant.age >= 50).length,
});

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const r = countEntrants(entrants);
  const b = data.prices;
  const total = r.child * b.child + r.adult * b.adult + r.senior * b.senior;
  return total;
};
module.exports = { calculateEntry, countEntrants };
