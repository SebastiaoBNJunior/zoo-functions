const data = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  if (!name) return {}; // retorno de objeto vazio caso não receba um parametro

  const employee = data.employees.find((emp) => emp.firstName === name || emp.lastName === name);

  return employee // retorno caso encontre a comparação do nome e sobrenome
    ? {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      managers: employee.managers,
      responsibleFor: employee.responsibleFor,
    }
    : {};
};

module.exports = getEmployeeByName;
