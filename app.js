// NEXT https://dev.to/internettradie/mastering-hard-parts-of-javascript-prototype-class-iii-2k6g

const personStore = {
  greet() {
    console.log("hello");
  },
};

function personFromPersonStore (name, age) {
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person
}

personStore.introduce = function (){
  console.log(`my name is ${this.name}`);
}
const dejan = personFromPersonStore("dejan", 31);
dejan.greet();
console.log(dejan.introduce());

