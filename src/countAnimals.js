const data = require('../data/zoo_data');

const getCountSpecies = (speciesName) => data.species.find((name) => name.name === speciesName);

const getCountBySex = (residents, sex) => residents.filter((resident) => resident.sex === sex);

const countAnimals = (animal) => {
  if (!animal) {
    const cacandoonome = data.species.map((especies) => especies.name);
    const cacandoaespecie = data.species.map((resident) => resident.residents.length);
    const objeto = cacandoonome.reduce((acc, chave, index) => {
      acc[chave] = cacandoaespecie[index];
      return acc;
    }, {});
    return objeto;
  }

  const countSpecies = getCountSpecies(animal.species);

  if (animal.sex) {
    const countSex = getCountBySex(countSpecies.residents, animal.sex);
    return countSex.length;
  }

  return countSpecies.residents.length;
};

module.exports = countAnimals;
