const value = "Felipe";
const exampleObject = {
  propertyName: value,
};
console.log(exampleObject["propertyName"]);

const person = {
  name: "Felipe",
  age: 20,
  city: "Teresina",
  job: "Student",
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

delete person.job;
console.log(person.job);

const { name, ...ageAndCity } = person;
console.log(ageAndCity.name);
console.log(ageAndCity.age);
console.log(ageAndCity.city);

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("job"));
console.log(Object.hasOwn(person, "name"));
console.log(Object.hasOwn(person, "job"));
console.log("name" in person);
console.log("job" in person);

person.contact = {
  email: "felipe@gmail.com",
  phone: {
    home: "123",
    work: "456",
  },
};
console.log(person);
console.log(person.contact);
console.log(person.contact.email);
console.log(person.contact.phone);
console.log(person.contact.phone.home);
console.log(person.contact.phone.work);

person.greet = function greet() {
  console.log(`Hello!, my name is ${this.name} and i'm a ${this.job}`);
};

console.log(person);
person.greet();

const num = 42;
const numObj = Object(num);

console.log(numObj);
console.log(typeof numObj); // "object"
