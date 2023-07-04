const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const findName = data.employees.find((people) => people.id === id).responsibleFor[0];
  const findAnimal = data.species.find((animal) => animal.id === findName).residents;

  let maxAge = 0;
  let animalOld = 0;

  findAnimal.forEach((animal) => {
    if (animal.age > maxAge) {
      maxAge = animal.age;
      animalOld = animal;
    }
  });
  return [`${animalOld.name}`, `${animalOld.sex}`, animalOld.age];
};
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
