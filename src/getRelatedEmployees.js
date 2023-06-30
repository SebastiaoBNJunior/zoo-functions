const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((employee) => employee.managers.includes(id));
console.log(isManager);
const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  if (isManager(managerId)) {
    const employeeArray = data.employees.filter((employee) =>
      employee.managers.includes(managerId));
    return employeeArray.map(
      (employee) => `${employee.firstName} ${employee.lastName}`,
    );
  }
};

module.exports = { isManager, getRelatedEmployees };
