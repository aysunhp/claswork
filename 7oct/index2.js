let monthNumber = Number(prompt("enter month number"));
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    alert("Winter");
    break;
  case 3:
  case 4:
  case 5:
    alert("Spring");
    break;
  case 6:
  case 7:
  case 8:
    alert("Summer");
    break;
  case 9:
  case 10:
  case 11:
    alert("Autumn");
    break;

  default:
    alert("Invalid input");
    break;
}
let weekNumber = Number(prompt("enter week number"));
switch (weekNumber) {
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("Wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
  case 7:
    alert("Weekend");
    break;
  default:
    alert("Invalid input!");
    break;
}
