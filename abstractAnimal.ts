abstract class Animal {
  abstract makeSound(): string;
}

interface Edible {
  howtoEat(): string;
}

abstract class Fruit implements Edible {
  abstract howtoEat(): string;
}

class Tiger extends Animal {
  makeSound(): string {
    return "Tiger: Roar!";
  }
}

let tiger = new Tiger();
console.log(tiger.makeSound());

class Chicken extends Animal implements Edible {
  makeSound(): string {
    return "Chicken: Cluck cluck!";
  }
  howtoEat(): string {
    return "Fried";
  }
}

let chicken = new Chicken();
console.log(chicken.howtoEat(), chicken.makeSound());

class Orange extends Fruit {
    howtoEat(): string {
        return 'Peeled Orange';
    };
}

class Apple extends Fruit {
    howtoEat(): string {
        return 'Sliced Apple';
    };
}

let orange = new Orange();
let apple = new Apple();
console.log(orange.howtoEat(), apple.howtoEat());