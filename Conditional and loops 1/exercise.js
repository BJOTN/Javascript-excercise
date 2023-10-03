function calculateSalary(role) {
  let salary=0;

  switch (role) {
    case 'ceo':
      salary += 2000;
      break;
    
    case 'cto' || 'manager':
      salary +=1800;
      break;

    case 'developer':
      salary += 1500;
      break;

    default:
      salary += 1000;
      break;
  }
  return salary
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(`ceo => ${ceoSalary}`);
console.log(`manager => ${managerSalary}`);
console.log(`cto => ${ctoSalary}`);
console.log(`developer=> ${developerSalary}`);
console.log(`default => ${otherSalary}`);