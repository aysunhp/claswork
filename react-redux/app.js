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
var Position;
(function (Position) {
    Position[Position["Manager"] = 0] = "Manager";
    Position[Position["HR"] = 1] = "HR";
    Position[Position["Marketing"] = 2] = "Marketing";
})(Position || (Position = {}));
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this.age = age;
    }
    Object.defineProperty(Human.prototype, "fullName", {
        get: function () {
            return this._name + " " + this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Human.prototype.Age = function () {
        return this.age;
    };
    return Human;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, age, salary, skills, position) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.salary = salary;
        _this.skills = skills;
        _this.position = position;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        console.log("This is Employee");
    };
    return Employee;
}(Human));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, hobbies, GPA) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.groupName = groupName;
        _this.hobbies = hobbies;
        if (GPA < 0 || GPA > 100) {
            _this._GPA = 0;
        }
        else {
            _this._GPA = GPA;
        }
        return _this;
    }
    Student.prototype.getInfo = function () {
        console.log("This is Student");
    };
    Student.prototype.hasPassed = function () {
        if (this._GPA <= 50) {
            return false;
        }
        else {
            return true;
        }
    };
    Object.defineProperty(Student.prototype, "GPA", {
        get: function () {
            return this._GPA;
        },
        set: function (newGPA) {
            if (newGPA <= 0 || newGPA >= 100) {
                this._GPA = 0;
            }
            this._GPA = newGPA;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Human));
var employee1 = new Employee("Jhon", "Smith", 23, 2300, ["web developer"], Position.Marketing);
// console.log(employee1);
// employee1.getInfo();
// console.log(employee1.Age());
// console.log(employee1.fullName);
var student1 = new Student("jane", "smith", 17, "BF3", ["reading", "singing"], 90);
// console.log(student1);
// student1.getInfo();
// console.log(student1.GPA);
// student1.GPA = 130;
// console.log(student1.GPA);
// console.log(student1.fullName);
// console.log(student1.hasPassed());
var formHuman = document.querySelector(".formHuman");
var nameInp = document.querySelector(".name");
var surnameInp = document.querySelector(".surname");
var ageInp = document.querySelector(".age");
var select = document.querySelector("#select");
var studentForm = document.querySelector(".student");
var employeeForm = document.querySelector(".employee");
select.addEventListener("change", function (e) {
    e.preventDefault();
    console.log(select.value);
    if (select.value == "student") {
        studentForm.style.display = "block";
        employeeForm.style.display = "none";
    }
    else {
        studentForm.style.display = "none";
        employeeForm.style.display = "block";
    }
});
var groupName = document.querySelector(".groupName");
var hobbiesInp = document.querySelector(".hobbies");
var GPAInp = document.querySelector(".GPA");
var salaryInp = document.querySelector(".salary");
var skillsInp = document.querySelector(".skills");
var positionInp = document.querySelector(".position");
formHuman.addEventListener("submit", function (e) {
    e.preventDefault();
    if (select.value == "student") {
    }
});
