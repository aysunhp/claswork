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

enum ShapeKind {
  circle,
  square,
}

interface Shape {
  kind: ShapeKind;
  radius?: number;
  sideLenght?: number;
  getArea: (arg: number) => number;
}

class Circle implements Shape {
  kind: ShapeKind.circle;
  radius?: number;
  getArea(radius: number): number {
    return radius * radius * Math.PI;
  }
  getArea(2);
}

class Square implements Shape {
  kind: ShapeKind.square;
  sideLenght?: number;
  getArea(sideLenght: number): number {
    return sideLenght * sideLenght;
  }
  getArea(2);
}
