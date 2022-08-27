// NEXT https://dev.to/internettradie/mastering-hard-parts-of-javascript-prototype-class-v-l91


class PersonClass{
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log("hallo");
  }
}

class DeveloperClass{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
introduce(){
  console.log(`My name is ${this.name}`);
}
}

const dejan = new DeveloperClass("Dejan", 31);

console.log(dejan.age);

