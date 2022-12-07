import input from "./input.js";

let pos = [
  ["W", "D", "G", "B", "H", "R", "V"],
  ["J", "N", "G", "C", "R", "F"],
  ["L", "S", "F", "H", "D", "N", "J"],
  ["J", "D", "S", "V"],
  ["S", "H", "D", "R", "Q", "W", "N", "V"],
  ["P", "G", "H", "C", "M"],
  ["F", "J", "B", "G", "L", "Z", "H", "C"],
  ["S", "J", "R"],
  ["L", "G", "S", "R", "B", "N", "V", "M"],
];

const move = (count, from, to) => {
  //move the count ammount of elements from the from array to the to array from and to are the inexes of the pos array

  for (let i = 0; i < count; i++) {
    pos[to - 1].push(pos[from - 1].pop());
  }
};

const instructions = input.split("\n");

instructions.forEach((i) => {
  const s = i.split(" ");

  if (s[0] === "move") {
    move(s[1], s[3], s[5]);
  }
});

console.log(pos.map((p) => p[p.length - 1]).join(""));
