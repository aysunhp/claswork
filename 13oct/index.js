let employees = [
  {
    fullname: "Nabil Villanueva",
    salary: 5000,
    department: "IT",
    age: 18,
    isMarried: false,
    isMale: true,
  },
  {
    fullname: "Ellis Blanchard",
    salary: 4000,
    department: "HR",
    age: 25,
    isMarried: true,
    isMale: false,
  },
  {
    fullname: "Claire Tanner",
    salary: 800,
    department: "Finance",
    age: 23,
    isMarried: false,
    isMale: false,
  },
  {
    fullname: "Jaya Casey",
    salary: 3500,
    department: "Finance",
    age: 64,
    isMarried: true,
    isMale: true,
  },
];

// // task1
// let sum = 0;
// for (let i = 0; i < employees.length; i++) {
//   sum += employees[i].salary;
// }
// console.log(sum / employees.length);

// // task2

// let count = 0;
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].isMale == true) {
//     count++;
//   }
// }
// console.log(count);

// // task3
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].age > 60) {
//     let lastTable = employees.splice(i, 1);
//   }
// }
// console.log(employees);

// // task4
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].isMarried == true) {
//     console.log(employees[i].fullname);
//   }
// }

// // task5
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary < 1000) {
//     employees[i].salary += 500;
//   }
// }
// console.log(employees);

// // task6
// let newEmployee = [];
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].department == "IT") {
//     newEmployee.push(employees[i]);
//   }
// }
// console.log(newEmployee);

// // task7
// let max = 0;
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].department == "Finance") {
//     if (employees[i].salary > max) max = employees[i].salary;
//   }
// }

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].department == "Finance") {
//     if (employees[i].salary == max) {
//       console.log(employees[i].fullname);
//     }
//   }
// }

// // task8
// let min = employees[0].salary;
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary < min) {
//     min = employees[i].salary;
//   }
// }
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary == min) {
//     employees[i].salary += 3000;
//     break;
//   }
// }
// console.log(employees);
