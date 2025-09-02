
class Animal {
    constructor(name, species) {
      this.name = name;       
      this.species = species; 
    }
  

    speak() {
      console.log(`${this.name} یک ${this.species} است و صدا می‌دهد.`);
    }
  }
  
  
  const lion = new Animal("لئو", "شیر");
  
 
  lion.speak();  
  
  