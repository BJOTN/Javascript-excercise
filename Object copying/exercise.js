const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName='Simon'

console.log(person1);
console.log(person2);
/* Viene modificato in entrambi gli oggetti perchè è come se avesse due chiavi di accesso per essere modificato, non piu solo person1 ma anche con person2 dopo aver fatto la 'copia' */
