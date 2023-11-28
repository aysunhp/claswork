// 33. İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan 	ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya 	yazın. Məsələn - [13,67,54]

//#region

// let arr = [
//   {
//     name: "aysun",
//     age: 19,
//   },
//   {
//     name: "jack",
//     age: 21,
//   },
//   {
//     name: "july",
//     age: 19,
//   },
//   {
//     name: "suzan",
//     age: 29,
//   },
//   {
//     name: "lucy",
//     age: 22,
//   },
// ];

// let max = arr[0].age;
// let min = arr[0].age;
// let arrResult = [];

// arr.forEach((elem) => {
//   if (max < elem.age) {
//     max = elem.age;
//   }
//   if (min > elem.age) {
//     min = elem.age;
//   }
// });
// arrResult.push(min, max, max - min);
// console.log(arrResult);

// 34. N faktorialı hesaplayan funksiya yazın.
// let n = 5;
// let fac = 1;
// for (let i = 1; i <= n; i++) {
//   fac *= i;
// }
// console.log(fac);

// 35. const input = [
//     ["a", "b", "c"],
//     ["c", "d", "f"],
//     ["d", "f", "g"],
//       ];              2D massivini sıralayan funksiya yazın.
//       Output - {
//       a: 1,
//       b: 1,
//       c: 2,
//       d: 2,
//       f: 2,
//       g: 1,
//         }

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// input.sort();

// console.log(
//   input.flat().reduce((acc, elem) => {
//     acc[elem] ? acc[elem]++ : (acc[elem] = 1);
//     return acc;
//   }, {})
// );

// String.prototype.myFirstIndex = function () {
//   return this[0];
// };

// let a = "salamm";
// console.log(a.myFirstIndex());

// String.prototype.mylength = function () {
//   let count = 0;
// };

// capitalize

// String.prototype.myCapitalize = function () {
//   return this[0].toUpperCase() + this.slice(1);
// };
// console.log("salam".myCapitalize());

// isBlank

// String.prototype.isBlank = function () {
//   if (this == "") {
//     return false;
//   }
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] != " ") {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(" ".isBlank());

// concat
// String.prototype.myConcat = function (element) {
//   return this + element;
// };
// console.log("salam".myConcat("sagol"));

// replace

  

// forEach
Array.prototype.myforEach = function (callback) {};
// map
 