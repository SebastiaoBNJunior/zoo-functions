const data = require('../data/zoo_data');

const getAnimalsOlderThan = (species, age) => {
  const speciesData = data.species.find((s) => s.name === species);

  return speciesData
    ? speciesData.residents.every((resident) => resident.age >= age)
    : 'Espécie não encontrada';
};

module.exports = getAnimalsOlderThan;
