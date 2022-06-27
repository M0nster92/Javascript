function Circle(radius) {
  this.radius = radius;
}

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.draw = function () {
  console.log("Drawing radius", this.radius);
};
