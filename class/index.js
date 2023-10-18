// class Canli {
//   #gender;
//   constructor(name, gender, birthYear) {
//     this.name = name;
//     this.#gender = gender;
//     this.birthYear = birthYear;
//   }
//   getage() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   }
//   get fullInfo() {
//     return "bu canlilar classidir";
//   }
//   eyeColor() {
//     console.log(`${this.name} goz rengi mavidir`);
//   }
// }

// class People extends Canli {
//   eleColor() {
//     console.log(`${this.name} goz rengi yasildir`);
//   }
// }
// let person1 = new People("jane", "austen", 2004);
// console.log(person1);
// person1.getage();
// console.log("-----------");
// console.log(person1.fullInfo);
// console.log("-----------");
// person1.eyeColor();

// class Animal extends Canli {
//   eleColor() {
//     console.log(`${this.name} goz rengi bozdur`);
//   }
// }
// let animal1 = new Animal("pisik", "ag", 2020);
// console.log(animal1);
// animal1.getage();
// console.log(animal1.fullInfo);
// animal1.eyeColor();

// class Alien extends Canli {
//   eleColor() {
//     console.log(`${this.name} goz rengi qaradirdir`);
//   }
// }
// let alien1 = new Alien("jade", "claus", 2000);
// console.log(alien1);
// alien1.getage();
// console.log(alien1.fullInfo);
// alien1.eyeColor();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   speak() {
//     console.log(`${this.name} makes noise`);
//   }
// }

// let animal1 = new Animal("cat", 5);
// // animal1.speak();
// let animal2 = new Animal("dog", 3);
// // animal2.speak();
// let animal3 = new Animal("panda", 6);
// // animal3.speak();

// class Cat extends Animal {
//   speak() {
//     super.speak();
//     console.log(`${this.name} meows`);
//   }
// }
// let cat1 = new Cat("gray", 5);
// // cat1.speak();

// class Dog extends Animal {
//   speak() {
//     super.speak();
//     console.log(`${this.name}  barks`);
//   }
// }

// let dog1 = new Dog("white", 5);
// // dog1.speak();

// class Lion extends Cat {
//   speak() {
//     super.speak();
//     console.log(`${this.name} roars`);
//   }
// }

// let lion1 = new Lion("king", 8);
// // console.log(lion1);
// // lion1.speak();

class Human {
  #birthYear;
  constructor(name, surname, birthYear, birthPlace) {
    this.name = name;
    this.surname = surname;
    this.#birthYear = birthYear;
    this.birthPlace = birthPlace;
  }

  getFullName() {
    console.log(`${this.name}  ${this.surname}`);
  }
  get FullName() {
    return `${this.name}  ${this.surname}`;
  }
  getAge() {
    let d = new Date();
    let date = d.getFullYear();
    console.log(date - this.#birthYear);
  }
  get age() {
    let d = new Date();
    let date = d.getFullYear();
    return date - this.#birthYear;
  }
  static compareAge(human1, human2) {
    if (human1.birthYear < human2.birthYear) {
      return human1;
    } else {
      return human2;
    }
  }
  static compareSameBirthCity(human1, human2) {
    if (human1.birthPlace.city === human2.birthPlace.city) {
      return true;
    } else {
      return false;
    }
  }
}

let human1 = new Human("jade", "smith", 2003, {
  city: "Paris",
  country: "France",
});
let human2 = new Human("akira", "smith", 2001, {
  city: "Paris",
  country: "France",
});

// class user
class User extends Human {
  username;
  email;
  password = `${this.birthYear}+${this.birthYear}`;
  isLogged = false;
  constructor(
    name,
    surname,
    birthYear,
    birthPlace,
    username,
    email,
    password,
    islogged
  ) {
    super(name, surname, birthYear, birthPlace);
    this.username = username;
    this.email = email;
    this.password = password;
    this.isLogged = islogged;
  }
  login(username, password) {
    if (username == this.username && password == this.password) {
      return alert(`welcome back ${this.name}  ${this.surname}`);
    } else {
      return alert("incorrect username or password");
    }
  }
}

let user1 = new User(
  "jane",
  "austen",
  2000,
  { city: "Rome", country: "Italy" },
  "jane_a",
  "jane@gmail.com",
  "12345"
);

console.log(user1);

user1.getFullName();
user1.getAge();

console.log(user1.FullName);
console.log(user1.age);

console.log(Human.compareAge(human1, human2));
console.log(Human.compareSameBirthCity(human1, human2));

user1.login("jane_a", "12345");
