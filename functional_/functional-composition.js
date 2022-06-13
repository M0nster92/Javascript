const word = "  hEllO ";
const trimString = (str) => str.trim();
const lowercase = (str) => str.toLowerCase();
const addTag = (tag, str) => `<${tag}>${str}</${tag}>`;

const output = addTag("div", lowercase(trimString(word)));

console.log(output);
