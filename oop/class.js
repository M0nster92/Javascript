//factory function

function CreateCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const c1 = CreateCircle(4);
const c2 = CreateCircle(8);

//constructor function
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      defaultLocation = value;
    },
  });
}

const c = new Circle(5);

class Circles {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    console.log("draw");
  }
}

const d = new Circles(6);
d.draw();
