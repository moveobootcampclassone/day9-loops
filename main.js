// -------------------
// For loop & While loop
// -------------------

// for (let i = 0; i < 10; i++) {
//   console.log("hi" + i);
//   //   console.log(i);
// }
//Output : 0,1,2,...,9

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }
// Output: 0, 2, 4, 6, 8;

// for (let i = 10; i > 0; i -= 2) {
//   console.log(i);
// }
// Output: 10, 8, 6, 4, 2

// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   sum += i; //the same as: sum = sum + i
//   // sum = 0 + 0 (i=0)
//   // sum = 0 + 1 (i=1)
//   // sum = 1 + 2 (i=2)
//   // sum = 3 + 3 (i=3)
//   // sum = 6 + 4 (i=4)
// }
// console.log(sum);
// // Output: 45;

// let sum = 0;
// for (let i = 0; i <= 10; i += 2) {
//   sum += i; //the same as: sum = sum + i
//   // sum = 0 + 0 (i=0)
//   // sum = 0 + 2 (i=2)
//   // sum = 2 + 4 (i=4)
//   // sum = 6 + 6 (i=6)
//   // sum = 12 + 8 (i=8)
//   // sum = 20 + 10 (i=10)
// }
// console.log(sum);
// Output: 30;

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log("before: ", i);
//   if (i === 3) break;
//   console.log("after: ", i);
// }
// -------------

// while loop
// prints all odd number
let i = 0;
// while (i >= 0 && i < 10) {
while (i < 10) {
  console.log(i);
  //code block
  i += 2;
}
// let j = 0;
// while (condition) {
//   ///code to do
//   j++;
// }
//------------------------------
//Continue
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  //text = text + i
  // text = "" + 0 = "" + "0" = "0"
  // text = "0" + 1 = "0" + "1" = "01"
  text += i; // + in string its concatenating (שירשור)
}
console.log(text);
// expected output: "012456789"

// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
// }

// -------------------

//Break

// let i = 0;
// while (i < 6) {
//   if (i === 3) break;
//   i++;
// }
// console.log(i);

// let i = 0;
// while (i < 6) {
//   if (i === 3) break;
//   i++;
// }
// console.log(i);

// -------------------

// let count = 0;
// while (count < 10) {
//   count += 2;
// }
// //What is the value of count?
// console.log(count);

//Print all even numbers

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// -------------------
//Looping over arrays
// -------------------

const array = [1, 2, 3, 4, 5, 6];

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   index *= index;
//   console.log(element);
// }

function onInit() {
  let makeDiv = "";
  for (let index = 0; index < 5; index++) {
    makeDiv += `<p>my index is ${index}</p></br>`;
  }
  console.log(makeDiv);
  //<p>my index is 0</p></br>
  //<p>my index is 1</p></br>
  //<p>my index is 2</p></br>
  // <p>my index is 3</p></br>
  // <p>my index is 4</p></br> *
  document.getElementById("my-id").outerHTML = makeDiv;
}
// const movies = ["Django", "Seven", "Batman"];
// let makeList = `<ul>`;
// for (let index = 0; index < movies.length; index++) {
//   const element = movies[index];
//   makeList += `<li>${element}</li>`;
// }
// makeList += `</ul>`;
// console.log(makeList);

//--------------------------------------//
// const evenArray = [];
// const oddArray = [];

// for (let i = 0; i < array.length; i++) {
//   i % 2 === 0 ? evenArray.push(i) : oddArray.push(i);
// }
// console.log("Even: ", evenArray);
// console.log("Odd: ", oddArray);
// -------------------

// -------------------
//Nested Loops
// -------------------

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i + "," + j);
//   }
// }
// for (let i = 0; i <= 3; i++) {
//   let row = "*";
//   for (let j = 0; j <= 3; j++) {
//     row += "#";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 8; i++) {
//   let row = "";
//   for (let j = 1; j <= 8; j++) {
//     if (i % 2 === 0 && j % 2 === 0) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 8; i++) {
//     let row = "";
//     for (let j = 1; j <= 8; j++) {
//       if ((i + j) % 2 === 0) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row);
//   }
