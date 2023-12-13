// enum VehicleType {
//   car = "car",
//   motorcycle = "motorcycle",
// }

// enum EngineType {
//   doch = "doch",
//   turbo = "turbo",
// }

// type fuel = 30 | 40 | 50 | 70 | 100;

// interface IVehicle<T> {
//   brandName: string;
//   modelName: string;
//   year: number;
//   fuelCapacity: fuel;
//   currentCapacity: T;
//   fuelFor1Km: number;
//   engine: EngineType;
//   vehicleType: VehicleType;
//   getInfo(): void;
//   drive(km: number): T;
// }

// class Car implements IVehicle<number> {
//   brandName: string;
//   modelName: string;
//   year: number;
//   fuelCapacity: fuel;
//   currentCapacity: number;
//   fuelFor1Km: number;
//   engine: EngineType = EngineType.turbo;
//   vehicleType: VehicleType = VehicleType.car;

//   constructor(
//     brandName: string,
//     modelName: string,
//     year: number,
//     fuelCapacity: fuel,
//     currentCapacity: number,
//     fuelFor1Km: number,
//     engine: EngineType = EngineType.turbo,
//     vehicleType: VehicleType = VehicleType.car
//   ) {
//     (this.brandName = brandName),
//       (this.modelName = modelName),
//       (this.year = year),
//       (this.fuelCapacity = fuelCapacity),
//       (this.currentCapacity = currentCapacity),
//       (this.fuelFor1Km = fuelFor1Km),
//       (this.engine = engine),
//       (this.vehicleType = vehicleType);
//   }

//   getInfo() {
//     console.log(`It' is ${this.brandName}'s ${this.modelName}`);
//   }

//   drive(km: number): number {
//     let updatedFuel = km * this.fuelFor1Km;
//     this.currentCapacity -= updatedFuel;
//     return this.currentCapacity;
//   }
// }

// class Motorcycle implements IVehicle<number> {
//   brandName: string;
//   modelName: string;
//   year: number;
//   fuelCapacity: fuel;
//   currentCapacity: number;
//   fuelFor1Km: number;
//   engine: EngineType = EngineType.turbo;
//   vehicleType: VehicleType = VehicleType.motorcycle;

//   constructor(
//     brandName: string,
//     modelName: string,
//     year: number,
//     fuelCapacity: fuel,
//     currentCapacity: number,
//     fuelFor1Km: number,
//     engine: EngineType = EngineType.turbo,
//     vehicleType: VehicleType = VehicleType.motorcycle
//   ) {
//     (this.brandName = brandName),
//       (this.modelName = modelName),
//       (this.year = year),
//       (this.fuelCapacity = fuelCapacity),
//       (this.currentCapacity = currentCapacity),
//       (this.fuelFor1Km = fuelFor1Km),
//       (this.engine = engine),
//       (this.vehicleType = vehicleType);
//   }

//   getInfo() {
//     console.log(`It' is ${this.brandName}'s ${this.modelName}`);
//   }
//   drive(km: number): number {
//     let updatedFuel = km * this.fuelFor1Km;
//     this.currentCapacity -= updatedFuel;
//     return this.currentCapacity;
//   }
// }

// let car1 = new Car("Audi", "R7", 2021, 70, 55, 2);
// console.log(car1);
// car1.getInfo();
// console.log(car1.drive(5));

// let motorcycle1 = new Motorcycle("Harley", "A5", 2021, 30, 20, 2);
// console.log(motorcycle1);
// motorcycle1.getInfo();
// console.log(motorcycle1.drive(5));

enum place {
  river,
  ocean,
  sea,
}

type fishKill = string[] | string;

interface IAnimal {
  name: string;
  age: number;
  getInfo(): void;
}

interface IBird {
  wingColor: string;
  fly(): void;
}

interface iKill<T extends fishKill> {
  kill: T;
}

interface IFish extends iKill<fishKill> {
  livePlace: place;
  swim(): void;
}

abstract class Animal implements IAnimal {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getInfo(): void {
    console.log(`It's name is ${this.name}`);
  }
}

class Bird extends Animal implements IBird {
  wingColor: string;
  constructor(name: string, age: number, wingColor: string) {
    super(name, age);
    this.wingColor = wingColor;
  }
  getInfo(): void {
    console.log(`It's name is ${this.name}`);
  }

  fly(): void {
    console.log("I can fly");
  }
}

class Fish extends Animal implements IFish {
  livePlace: place;
  kill: fishKill;
  constructor(name: string, age: number, livePlace: place, kill: fishKill) {
    super(name, age);
    this.livePlace = livePlace;
    this.kill = kill;
  }
  getInfo(): void {
    console.log(`It's name is ${this.name}`);
  }

  swim(): void {
    console.log("I can swim");
  }
}

let bird1 = new Bird("Ciki", 2, "red");
console.log(bird1);
bird1.getInfo();
bird1.fly();

let fish1 = new Fish("Nemo", 2, place.sea, ["shark", "snake"]);
console.log(fish1);
fish1.swim();
