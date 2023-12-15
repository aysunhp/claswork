enum Position {
  Manager = "Manager",
  HR = "HR",
  Marketing = "Marketing",
}

interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo(): void;
}

interface IEmployee<T> {
  salary: number;
  skills: T;
  position: Position;
}

interface IStudent<T> {
  groupName: string;
  hobbies: T;
  GPA: number;
  hasPassed(): boolean;
}

abstract class Human implements IHuman {
  private _name: string;
  private _surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this._name = name;
    this._surname = surname;
    this.age = age;
  }

  abstract getInfo(): void;

  public get fullName(): string {
    return this._name + " " + this._surname;
  }

  public get name(): string {
    return this._name;
  }
  public get surname(): string {
    return this._surname;
  }
  Age(): number {
    return this.age;
  }
}

class Employee extends Human implements IEmployee<string[]> {
  salary: number;
  skills: string[];
  position: Position;
  constructor(
    name: string,
    surname: string,
    age: number,
    salary: number,
    skills: string[],
    position: Position
  ) {
    super(name, surname, age);
    this.salary = salary;
    this.skills = skills;
    this.position = position;
  }

  getInfo(): string {
    return `${this.name}  ${this.surname}  work in ${this.position}`;
  }
}

class Student extends Human implements IStudent<string[]> {
  groupName: string;
  hobbies: string[];
  private _GPA: number;
  constructor(
    name: string,
    surname: string,
    age: number,
    groupName: string,
    hobbies: string[],
    GPA: number
  ) {
    super(name, surname, age);
    this.groupName = groupName;
    this.hobbies = hobbies;
    if (GPA < 0 || GPA > 100) {
      this._GPA = 0;
    } else {
      this._GPA = GPA;
    }
  }

  getInfo(): string {
    return `${this.name}  ${this.surname}  study in ${this.groupName} with ${this.GPA}GPA`;
  }

  hasPassed(): boolean {
    if (this._GPA <= 50) {
      return false;
    } else {
      return true;
    }
  }
  get GPA() {
    return this._GPA;
  }

  set GPA(newGPA: number) {
    if (newGPA <= 0 || newGPA >= 100) {
      this._GPA = 0;
    }
    this._GPA = newGPA;
  }
}

let employee1 = new Employee(
  "Jhon",
  "Smith",
  23,
  2300,
  ["web developer"],
  Position.Marketing
);

// console.log(employee1);
// employee1.getInfo();
// console.log(employee1.Age());
// console.log(employee1.fullName);

let student1 = new Student(
  "jane",
  "smith",
  17,
  "BF3",
  ["reading", "singing"],
  90
);

// console.log(student1);
// student1.getInfo();
// console.log(student1.GPA);
// student1.GPA = 130;
// console.log(student1.GPA);
// console.log(student1.fullName);
// console.log(student1.hasPassed());

let list = document.querySelector<HTMLUListElement>("ul")!;
let formHuman = document.querySelector<HTMLFormElement>(".formHuman")!;
let nameInp = document.querySelector<HTMLInputElement>(".name")!;
let surnameInp = document.querySelector<HTMLInputElement>(".surname")!;
let ageInp = document.querySelector<HTMLInputElement>(".age")!;
let select = document.querySelector<HTMLOptionElement>("#select")!;
let studentForm = document.querySelector<HTMLDivElement>(".student")!;
let employeeForm = document.querySelector<HTMLDivElement>(".employee")!;
select.addEventListener("change", function (e) {
  e.preventDefault();
  console.log(select.value);
  if (select.value == "student") {
    studentForm.style.display = "block";
    employeeForm.style.display = "none";
  } else {
    studentForm.style.display = "none";
    employeeForm.style.display = "block";
  }
});

let groupNameInp = document.querySelector<HTMLInputElement>(".groupName")!;

let hobbiesInp = document.querySelector<HTMLInputElement>(".hobbies")!;
let GPAInp = document.querySelector<HTMLInputElement>(".GPA")!;
let salaryInp = document.querySelector<HTMLInputElement>(".salary")!;
let skillsInp = document.querySelector<HTMLInputElement>(".skills")!;
let positionInp = document.querySelector<HTMLSelectElement>(".position")!;

formHuman.addEventListener("submit", function (e) {
  e.preventDefault();
  interface Student {
    name: string;
    surname: string;
    age: number;
    groupName: string;
    hobbies: string[];
    GPA: number;
  }

  if (select.value == "student") {
    let student2 = new Student(
      `${nameInp.value}`,
      `${surnameInp.value}`,
      Number(ageInp.value),
      `${groupNameInp.value}`,
      [`${hobbiesInp.value}`],
      Number(GPAInp.value)
    );

    console.log(student2);

    list.innerHTML += `<li>${student2.getInfo()}</li>`;
    clear();
  } else if (select.value == "employee") {
    let positionValue = positionInp.value;
    enum PositionValue {
      positionValue,
    }

    let employee2 = new Employee(
      `${nameInp.value}`,
      `${surnameInp.value}`,
      Number(ageInp.value),
      Number(salaryInp.value),
      [`${skillsInp.value}`],
      Position.HR
    );

    console.log(employee2);
    list.innerHTML += `<li>${employee2.getInfo()}</li>`;
    clear();
  }
});

function clear(): void {
  studentForm.style.display = "none";
  employeeForm.style.display = "none";
  nameInp.value = "";
  surnameInp.value = "";
  ageInp.value = "";
  groupNameInp.value = "";
  hobbiesInp.value = "";
  GPAInp.value = "";
  salaryInp.value = "";
  skillsInp.value = "";
}
