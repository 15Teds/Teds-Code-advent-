import input from "./input.js";

let answer = 0;
const dataArr = input.split(/\r?\n/);
const pairedRanges = dataArr.map((line) =>
  line.split(",").map(
    // A-B,X-Y 👉 ['A-B','X-Y']
    (numRange) =>
      numRange.split("-").map(
        // 👉 [['A','B'],['X','Y']]s
        (num) => parseInt(num) // (make numbers)
      )
  )
);

pairedRanges.forEach((coordinateSet) => {
  let [A, B] = coordinateSet[0];
  let [X, Y] = coordinateSet[1];

  if ((A <= X && B >= Y) || (A >= X && B <= Y)) {
    answer += 1;
  }
});

console.log(answer);

let answer2 = 0;
const dataArr2 = input.split(/\r?\n/);
const pairedRanges2 = dataArr.map((line) =>
  line.split(",").map(
    // A-B,X-Y 👉 ['A-B','X-Y']
    (numRange) =>
      numRange.split("-").map(
        // 👉 [['A','B'],['X','Y']]
        (num) => parseInt(num) // (make numbers)
      )
  )
);

pairedRanges.forEach((coordinateSet) => {
  // let [rangeArrA,rangeArrB] = coordinateSet;
  let [A, B] = coordinateSet[0];
  let [X, Y] = coordinateSet[1];

  if ((A < X && B < X) || (A > Y && B > Y)) {
    answer2 += 0;
  } else {
    answer2 += 1;
  }
});

console.log(answer2);
