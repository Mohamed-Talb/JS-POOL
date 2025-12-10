const person = 
{
  name: 'Rick',
  age: 77,
  country: 'US',
}

const clone1 = {...person}; // SHALLOW COPY
const clone2 = Object.assign({}, person); // SHALLOW COPY
const samePerson = person;

person.age += 1;
person.country = 'FR';
console.log(person);  
console.log(samePerson);  
console.log(clone1);
console.log(clone2);