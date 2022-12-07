import guide from "./input.js";

const dict = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
  WIN: 6,
  DRAW: 3,
  LOSS: 0,
  AX: "DRAW",
  AY: "WIN",
  AZ: "LOSS",
  BX: "LOSS",
  BY: "DRAW",
  BZ: "WIN",
  CX: "WIN",
  CY: "LOSS",
  CZ: "DRAW",
};

const scoreMap = new Map(Object.entries(dict));

const rounds = guide.split(`\n`);

// Part 1

let score = 0;
rounds.forEach((p) => {
  let hands = p.split(" ").join("");
  if (!hands) {
    return;
  }
  score += scoreMap.get(scoreMap.get(hands)) + scoreMap.get(p[2]);
});

console.log(`Score 1: ${score}`);

// Part 2

let score2 = 0;
rounds.forEach((p) => {
  let hands = p.split(" ").join("");
  if (!hands) {
    return;
  }
  if (p[2] == "X") {
    score2 += p[0] == "A" ? 3 : p[0] == "B" ? 1 : 2;
  } else if (p[2] == "Y") {
    score2 += 3 + (p[0] == "A" ? 1 : p[0] == "B" ? 2 : 3);
  } else if (p[2] == "Z") {
    score2 += 6 + (p[0] == "A" ? 2 : p[0] == "B" ? 3 : 1);
  }
});

console.log(`Score 2: ${score2}`);
