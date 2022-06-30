const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

function Person() {}

Object.assign(Person.prototype, canEat, canWalk);

let person = new Person();

function Fish() {}

Object.assign(Fish.prototype, canEat, canSwim);

let fish = new Fish();
