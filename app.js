// NEXT https://dev.to/internettradie/mastering-hard-parts-of-javascript-prototype-class-v-l91
// exercise 14

const userFunctionStore = {
  sayType: function(){
    console.log("I am " + this.type);
  }
}

const adminFunctionStore = Object.create(userFunctionStore);

function adminFactoryn(name, score){
  const admin = Object.create(adminFunctionStore);
  admin.name = name;
  admin.score = score;
  return admin;
}
adminFunctionStore.type = "Admin";

const a = adminFactoryn("dejan", 100);
a.sayType();

