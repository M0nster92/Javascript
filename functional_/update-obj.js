const person = {
  name: "Jack",
  address: {
    country: "Canada",
    state: "Ontario",
  },
};

const updated = { ...person, address: { ...person.address }, age: 20 };
updated.address.state = "British Columbia";
console.log(person);
console.log(updated);
