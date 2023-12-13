// enum VehicleType {
//   car = "car",
//   motorcycle = "motorcycle",
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var place;
(function (place) {
    place[place["river"] = 0] = "river";
    place[place["ocean"] = 1] = "ocean";
    place[place["sea"] = 2] = "sea";
})(place || (place = {}));
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.getInfo = function () {
        console.log("It's name is ".concat(this.name));
    };
    return Animal;
}());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, wingColor) {
        var _this = _super.call(this, name, age) || this;
        _this.wingColor = wingColor;
        return _this;
    }
    Bird.prototype.getInfo = function () {
        console.log("It's name is ".concat(this.name));
    };
    Bird.prototype.fly = function () {
        console.log("I can fly");
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, livePlace, kill) {
        var _this = _super.call(this, name, age) || this;
        _this.livePlace = livePlace;
        _this.kill = kill;
        return _this;
    }
    Fish.prototype.getInfo = function () {
        console.log("It's name is ".concat(this.name));
    };
    Fish.prototype.swim = function () {
        console.log("I can swim");
    };
    return Fish;
}(Animal));
var bird1 = new Bird("Ciki", 2, "red");
console.log(bird1);
bird1.getInfo();
bird1.fly();
var fish1 = new Fish("Nemo", 2, place.sea, ["shark", "snake"]);
console.log(fish1);
fish1.swim();
