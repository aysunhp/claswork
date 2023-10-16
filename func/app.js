//#region
// function getSum(num1, num2) {
//     return num1 + num2;
//   }
//   function getDif(num1, num2) {
//     return num1 - num2;
//   }

//   function result(num1, num2) {
//     return getSum(num1, num2) * getDif(num1, num2);
//   }

//   console.log(result(5, 2));
//#endregion

//#region
// let obj = {
//   name: "aysun",
//   surname: "xipiyeva",
//   age: 18,
// };
// function oneLine(obj) {
//   return obj.name + " " + obj.surname + " " + obj.age;
// }

// console.log(oneLine(obj));
//#endregion

// function isPrime(num) {
//   if (num == 1) {
//     return 0;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i != 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(isPrime(1));
// console.log(isPrime(7));
// console.log(isPrime(25));

//#region
// function isPrime(num) {
//   if (num === 1) {
//     return 0;
//   } else if (num === 2) {
//     return true;
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// let arr = [7, 6, 5, 4, 9];
// function primeQuantity(numbers) {
//   let count = 0;
//   for (let i = 0; i < arr.numbers; i++) {
//     if (isPrime(numbers[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(primeQuantity(arr));
//#endregion

let car = {
  brand: "Porche",
  mileage: 10500,
  fuelfor1KM: 5,
  fuelCapacity: 50,
  currentFuel: 20,
  increaseFuel: function (addfuel) {
    if (addfuel + this.currentFuel > this.fuelCapacity) {
      return alert("full capacity doolub");
    } else {
      this.currentFuel += addfuel;
    }
  },

  drive: function (road) {
    if (this.fuelfor1KM * road > this.currentFuel) {
      return alert("gede bilmez");
    } else {
      this.mileage += road;
      this.currentFuel -= this.fuelfor1KM * road;
    }
  },
};

console.log(car);
console.log(car.increaseFuel(15));
console.log(car.drive(5));
