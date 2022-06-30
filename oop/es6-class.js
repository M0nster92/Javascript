class Shape {
  #color;
  constructor(color) {
    this.#color = color;
  }

  getColor() {
    console.log("size");
  }
}

class Circle extends Shape {
  #radius;
  constructor(radius, color) {
    super(color);
    this.#radius = radius;
  }

  draw() {
    console.log("draw");
  }

  #move() {
    console.log("move");
  }

  getRadius() {
    return this.#radius;
  }
}

const c = new Circle(1, "red");
