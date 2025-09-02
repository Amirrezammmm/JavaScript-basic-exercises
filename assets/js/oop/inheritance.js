class Animal {
    speak() {
      console.log("یک حیوان صدا می‌دهد");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("سگ واق‌واق می‌کند");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("گربه میو می‌کند");
    }
  }
  

  const animals = [new Dog(), new Cat(), new Animal()];
  
  animals.forEach(animal => animal.speak());
  
  