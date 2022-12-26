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
  // console.log(i);
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
// console.log(text);
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

const numArrays = [1, 2, 3, 4, 5, 6];
//array.length = 6
// 0,1,2,3,4,5

// for (let index = 0; index <= numArrays.length - 1; index++) {
// or :for (let index = 0; index < numArrays.length; index++) {
//   const element = numArrays[index];
//   // element = array[0] => 1
//   // element = array[1] => 2
//   // element = array[2] => 3
//   // element = array[3] => 4
//   // element = array[4] => 5
//   // element = array[5] => 6
//   console.log(element, `this is my ${index} element`);
// }

// const numArrays = [1, 2, 3, 4, 5, 6];

// save in a new array the power of each number
let powNums = [];
for (let index = 0; index < numArrays.length; index++) {
  let element = numArrays[index];
  let newElement = element * element;
  powNums.push(newElement);
  // newElement = 1 * 1 = 1 (i=0)
  // powNums = [1]
  // newElement = 2 * 2 = 4 (i=1)
  // powNums = [1,4]
  // newElement = 3 * 3 = 9 (i=2)
  // powNums = [1,4,9]
  //...
}
// console.log(powNums);

function onInit() {
  let makeDiv = "";
  for (let index = 0; index < 5; index++) {
    makeDiv += `<p>my index is ${index}</p></br>`;
  }
  // console.log(makeDiv);
  //<p>my index is 0</p></br>
  //<p>my index is 1</p></br>
  //<p>my index is 2</p></br>
  // <p>my index is 3</p></br>
  // <p>my index is 4</p></br> *
  // document.getElementById("my-id").outerHTML = makeDiv;
}

const movies = ["Django", "Seven", "Batman"];
let makeList = `<ul>`;
for (let index = 0; index < movies.length; index++) {
  const element = movies[index];
  // element = "Django" (index = 0)
  // element = "Seven" (index = 1)
  makeList += `<li>${element}</li>`;
  //makeList = <ul><li>Django</li> (index = 0)
  //makeList = <ul><li>Django</li><li>Seven</li> (index = 1)
  // ...
}
makeList += `</ul>`;
console.log(makeList);
//output: "<ul><li>Django</li><li>Seven</li><li>Batman</li></ul>"
document.getElementById("my-id").outerHTML = makeList;
// document.getElementById("my-id").outerHTML = "<p>Hello</p><p>Hello2</p>";

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
//     // 1,1 (i=1,j=1)
//     // 1,2 (i=1,j=2)
//     // 1,3 (i=1,j=3)
//     // 2,1 (i=2,j=1)
//     // 2,2 (i=2,j=2)
//     // 2,3 (i=2,j=3)
//     //...
//     //...
//     // 3,3 (i=3,j=3)
//   }
// }

//TODO: make better example
let password = "";
for (let i = 0; i <= 3; i++) {
  let symbols = "*";
  for (let j = 0; j <= 3; j++) {
    symbols += "#"; // symbols = symbols + "#" //שרשור
    // a += 3 // a = a + 3 //כתיב מקוצר
    // symbols = "*" + "#" (j=0)
    // symbols = "*#" +"#"  (j=1)
    // symbols = "*##" + "#" (j=2)
    // symbols = "*###" + "#" (j=3)
  }
  //symbols = "*####"
  password += symbols; // password = password + symbols
  //password = "" + "*####" (i=0)
  //password = "*####" + "*####" (i=1)
  //password = "*####*####" (i=2)
  // console.log(symbols, "symbols");
}
// console.log(password);
//"*####*####*####*####"

// for (let i = 1; i <= 4; i++) {
//   let row = "";
//   for (let j = 1; j <= 4; j++) {
//     if (i % 2 === 0 && j % 2 === 0) {
//       row += "*";
//       //(i=2,j=2)
//       //(i=2,j=4)
//     } else {
//       row += "#";
//       // (i=1,j=1)
//       // (i=1,j=2)
//       // (i=1,j=3)
//       // (i=1,j=4)
//       // (i=2,j=1)
//       // (i=2,j=3)
//     }
//   }
//   console.log(row);
// }

let row = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    if ((i + j) % 2 === 0) {
      row += "*";
      //(i=1,j=1)
      //(i=1,j=3)
    } else {
      row += "#";
      //(i=1,j=2)
      //(i=1,j=4)
    }
  }
  // console.log(row);
}

for (let index = 0; index < numArrays.length; index++) {
  const element = numArrays[index];
  //
  //
}
