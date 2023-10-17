// let str = "   salam, men azerbaycanliyam  ";
// let str1 = "123";

// console.log(str.length);
// console.log(str.slice(0, 6));
// console.log(str.substring(0, 5));
// console.log(str.replace("azerbaycanliyam", "aysunam"));
// console.log(str.replaceAll("azerbaycanliyam", "aysunam"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str.split(0, 6, "helolo"));
// console.log(str.concat(str1));
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str.trimStart());
// console.log(str.trimEnd());
// console.log(str.trim());
// console.log(str.padStart());
// console.log(str1.padEnd(4, "."));
// console.log(str1.padStart(2, "*"));

// const arr = ["Banana", "Orange", "Apple", "Mango"];
// console.log(arr.length);
// console.log(arr.toString);
// console.log(arr.pop(0));
// console.log(arr);
// console.log(arr.push("alma"));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr.unshift("salam"));
// console.log(arr);
// console.log(arr.join("."));
// console.log(arr.slice(1, 2));
// console.log(arr);
// console.log(arr.splice(1, "hello"));

//#region
// let arr = ["Istanbul", "Baku", "London", "Kopenhagen", "Roma", "Paris"];

// function search(arr) {
//   let word = prompt("enter the word");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toUpperCase().includes(word.toUpperCase())) {
//       console.log(arr[i]);
//       break;
//     }
//   }
// }
// search(arr);

//#endregion

// task1
//#region
// let str = "Apple_Banana_Kiwi_Orange";
// console.log(str.replaceAll("_", "-"));

//#endregion

// task2
//#region
// let str = "hELLO, WORLD";
// myfunc = (str) => {
//   let lowerCase = str.toLowerCase();
//   return lowerCase;
// };

// console.log(myfunc(str));

//#endregion

// task3
//#region
// let str = "  HELLO, WORLD   ";
// myfunc = (str) => {
//   let myarr = str.trim().split("");
//   return myarr;
// };

// console.log(myfunc(str));

//#endregion

// task4
//#region

// let str = "Robin Sings from USA";
// myfunc = (str) => {
//   let mystr = str.replaceAll(" ", "-");
//   let myLowerStr = mystr.toLowerCase();
//   return myLowerStr;
// };
// console.log(myfunc(str));

//#endregion

// task5
//#region

// let str = "js string exercises";
// myfunc = (str) => {
//   let mystr = str.charAt(0).toUpperCase() + str.slice(1);
//   return mystr;
// };
// console.log(myfunc(str));

//#endregion

// task6
//#region

// let str = "JS String ExerciseS";
// let count = 0;
// let countOfUpperLeters = function (str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase() && str[i].trim() != "") {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countOfUpperLeters(str));

//#endregion

// task7
//#region

// let str = "JS String ExerciseS";
// let word = "String";

// function myfunc(word, str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.includes(word)) {
//       let objT = {
//         index: str.indexOf(word),
//         isFound: true,
//       };
//       return objT;
//     } else {
//       let objF = {
//         index: str.indexOf(word),
//         isFound: -1,
//       };
//       return objF;
//     }
//   }
// }
// console.log(myfunc(word, str));

//#endregion

// task8

//#region

// getFullName = `${this.name}  ${this.surname} `;

// function Human(name, surname, birthYear, birthCity) {
//   this.name = name;
//   this.surname = surname;
//   this.birthYear = birthYear;
//   this.birthCity = birthCity;
//   this.getFullName = function () {
//     return this.name + " " + this.surname;
//   };
// }

// let human1 = new Human("Julian", "Joyce", 2004, "Rome");
// let human2 = new Human("Nevaeh", "Simmons", 2002, "New York");
// let human3 = new Human("Dawid", "Houston", 2001, "Istanbul");
// let human4 = new Human("Sufyaan ", "Bridges", 2002, "Baku");
// let human5 = new Human("Aysha", "Schultz", 2005, "France");
// let human6 = new Human("Nahid", "Memmedov", 2002, "New Jersie");
// let humanArr = [];
// humanArr.push();
//#endregion
