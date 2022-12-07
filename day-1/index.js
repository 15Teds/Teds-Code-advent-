import str from "./input.js";

const split = str.split("\n\n").map((s) => s.split("\n"));

let score = [];
let total = 0;

split.forEach((s) => {
  const t = s.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  score.push(t);
  if (t > total) total = t;
});

console.log(`Highest Total: ${total}`);
console.log(
  `Top 3: ${score
    .sort((a, b) => b - a)
    .slice(1, 4)
    .reduce((a, b) => a + b)}`
);
