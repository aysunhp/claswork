// type name = string;
// type surname = string;
// type age = number;
// type id = number;
// type uuid= number | string
// type person = {
//   name: string;
//   surname: string;
//   age: number;
//   id: uuid;
// };
// function createPerson(name:string, surname:string, age:number, id:uuid,birthDate:Date):person {
//   console.log();
//   return name + surname;
// }
// createPerson()
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["circle"] = 0] = "circle";
    ShapeKind[ShapeKind["square"] = 1] = "square";
})(ShapeKind || (ShapeKind = {}));
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.getArea = function (radius) {
        return radius * radius * Math.PI;
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.getArea = function (sideLenght) {
        return sideLenght * sideLenght;
    };
    return Square;
}());
