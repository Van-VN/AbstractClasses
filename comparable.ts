interface Comparable {
  compareTo(o: object): string;
}

class Circle {
  radius: number;

  constructor(rad: number) {
    this.radius = rad;
  }

  getRad() {
    return this.radius;
  }

  setRad(input: number) {
    this.radius = input;
  }

  toString(): string {
    return `This Circle has a radius of ${this.radius}`;
  }
}

class CompareCircle extends Circle implements Comparable {
  constructor(radius: number) {
    super(radius);
  }

  getRad() {
    return this.radius;
  }

  setRad(input: number) {
    this.radius = input;
  }

  toString(): string {
    return `This Circle has a radius of ${this.radius}`;
  }

  compareTo(o: CompareCircle): any {
    if (this.getRad() > o.getRad()) {
      return `The circle with radius of ${this.getRad()} is bigger than the circle with radius of ${o.getRad()}`;
    } else if (this.getRad() < o.getRad()) {
      return `The circle with radius of ${this.getRad()} is smaller than the circle with radius of ${o.getRad()}`;
    } else if (this.getRad() === o.getRad()) {
      return `Both cirlces are equal with the radius of ${this.getRad()}`;
    }
  }
}

let circle1 = new CompareCircle(10);
let circle2 = new CompareCircle(10);
let circle3 = new CompareCircle(30);

console.log(circle1.compareTo(circle2));
console.log(circle3.compareTo(circle1));
console.log(circle2.compareTo(circle3));
