// task1
// let number = Number(prompt("enter a number"));
// let word = prompt("enter a word");
// for (let i = 0; i < number; i++) {
//   console.log(`${word}`);
// }

// task2

// let num = Number(prompt("enter a number"));
// let fac = 1;

// for (let i = num; i > 0; i--) {
//   fac = fac * i;
// }
// alert(`${fac}`);

// task3

// let num1 = Number(prompt("enter first number"));
// let num2 = Number(prompt("enter second number"));
// if (num1 > num2) {
//   do {
//     num2 = Number(prompt("enter second number"));
//   } while (num2 < num1);
// }
// alert(num1 + num2);

// task4

// let num = Number(prompt("enter a number"));
// let count = 1;
// let a;
// while (num > 10) {
//   a = num % 10;
//   num = num / 10;
//   count++;
// }
// alert(count);

// task5

// let str = prompt("enter a string");
// let count = 1;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == ",") {
//     count++;
//   }
// }
// alert(count);

// task 6

// let num = Number(prompt("enter a number"));
// let pow = Number(prompt("enter a number"));
// let result = 1;

// // alert(num ** pow);
// for (let i = 1; i <= pow; i++) {
//   result *= num;
// }

// alert(result);

// let arr1 = [1, 2, 5, 7, 2, 5, 1];
// let sum = 0;
// let avg;
// for (let i = 0; i <= arr1.length; i++) {
//   sum += i;
// }
// avg = sum / arr1.length;
// alert(avg);

// let arr1 = [4, 2, 5, 13, 2, 1, 5];
// let max = arr1[0];
// let min = arr1[1];

// for (let i = 0; i <= arr1.length; i++) {
//   if (max < arr1[i]) {
//     max = arr1[i];
//   }

//   if (min > arr1[i]) {
//     min = arr1[i];
//   }
// }
// let avg = (min + max) / 2;
// alert(avg);

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let count = 0;
let primeNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 1) {
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        break;
      }
      if (j === Math.sqrt(arr[i])) {
        count++;
        primeNumbers.push(arr[i]);
      }
    }
  }
}

alert(count);
