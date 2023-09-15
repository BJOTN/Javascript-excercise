function calculateSalary(role) {
  switch (role) {
    case ceo:
      return 2000;
      break;
    case manager:
      return 2000;
      break;
    case cto || manager:
      return 2000;
      break;
    case developer:
      return 2000;
      break;
    default:
      return 1000;
      break;
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);