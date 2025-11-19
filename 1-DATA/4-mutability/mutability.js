const person = 
{
  name: 'Rick',
  age: 78,
  country: 'FR',
}

const clone1 = {...person};
const clone2 = Object.assign({}, person);
const sameperson = person;

person.age += 1;
person.country = 'US';
console.log(clone1);
console.log(clone2);
console.log(sameperson);
console.log(person);
