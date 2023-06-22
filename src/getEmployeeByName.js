const data = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  if (!name) return {};

  const employee = data.employees.find((emp) => emp.firstName === name || emp.lastName === name);

  return employee
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
