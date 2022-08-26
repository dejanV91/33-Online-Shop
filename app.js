// NEXT https://dev.to/internettradie/mastering-hard-parts-of-javascript-prototype-class-iii-2k6g 

// EXAMPLE 6

function personConstructor(){
  this.greet = function () {
    console.log("hello");
  }
}

function personFromConstructor(name ,age){
  const person = new personConstructor();
    person.name = name;
    person.age = age;
    return person;
}

const simo = new personFromConstructor("Simon", 38);
console.log(simo);


