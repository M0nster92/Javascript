function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function extend(Child, parent) {
  Child.prototype = Object.create(parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(redius, color) {
  Shape.call(this, color);
  this.redius = redius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, "red");
