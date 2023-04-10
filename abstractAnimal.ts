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

class Chicken extends Animal implements Edible {
  makeSound(): string {
    return "Chicken: Cluck cluck!";
  }
  howtoEat(): string {
    return "Fried";
  }
}

class Orange extends Fruit {
    howtoEat(): string {
        return 'Peeled';
    };
}

class Apple extends Fruit {
    howtoEat(): string {
        return 'Sliced';
    };
}