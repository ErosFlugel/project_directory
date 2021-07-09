// Loop a triangle

// let hash = "#";

// for (let count = 0; count < 7; count++) {
//   console.log(hash);
//   hash += "#";
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     i % 5 === 0 ? console.log("FIZZBUZZ") : console.log("Fizz");
//   } else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

// let width = 8;
// let height = 8;
// let hash = "";

// for (let i = 1; i <= width; i++) {
//   hash += "# ";
// }

// for (let i = 1; i <= height; i++) {
//   if (i % 2 !== 0) {
//     console.log(" " + hash);
//   } else {
//     console.log(`${hash} \n`);
//   }
// }

let size = 5;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
