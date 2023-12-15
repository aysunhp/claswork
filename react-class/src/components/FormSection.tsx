import { useState } from "react";
import { Employee } from "./Functions";
import { Student } from "./Functions";
import { Position } from "./Functions";
import { Human } from "./Functions";
//   function clear(): void {
//     studentForm.style.display = "none";
//     employeeForm.style.display = "none";
//    setName(null);
//     setSurname(null);
//      setAge(null);
//     setGroupName(null);
//     setHobbies(null);
//     GPAInp.value = "";
//     salaryInp.value = "";
//     skillsInp.value = "";
//   }

const FormSection = () => {
  const [check, setCheck] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [groupName, setGroupName] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [GPA, setGPA] = useState<number>(0);
  const [salary, setSalary] = useState<number>(0);
  const [skills, setSkills] = useState<string[]>([]);
  // const [position, setPosition] = useState<string>("");
  const [people, setPeople] = useState<Human[]>([]);

  console.log(check);
  return (
    <>
      <form
        action=""
        className="formHuman"
        onSubmit={(e) => {
          e.preventDefault();
          if (check == "employee") {
            let employee1 = new Employee(
              name,
              surname,
              age,
              salary,
              skills,
              Position.HR
            );
            console.log(employee1);
            console.log(employee1.getInfo());

            setPeople([...people, employee1]);
          } else {
            let student1 = new Student(
              name,
              surname,
              age,
              groupName,
              hobbies,
              GPA
            );

            setPeople([...people, student1]);
          }
        }}
      >
        <input
          type="text"
          className="name"
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          className="surname"
          placeholder="Enter surname"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          className="age"
          placeholder="Enter age"
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />
        <br />
        <select
          name="select"
          id="select"
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value == "student") {
              setCheck("student");
            } else if (e.target.value == "employee") {
              setCheck("employee");
            } else {
              setCheck("");
            }
          }}
        >
          <option disabled={true} selected>
            Human
          </option>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
        </select>
        {check == "student" ? (
          <div className="student">
            <input
              type="text"
              placeholder="Enter group name"
              className="groupName"
              onChange={(e) => {
                setGroupName(e.target.value);
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Enter hobbies"
              className="hobbies"
              onChange={(e) => {
                let arr: string[] = e.target.value.split(",");
                setHobbies(arr);
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Enter GPA"
              className="GPA"
              onChange={(e) => {
                setGPA(Number(e.target.value));
              }}
            />
            <br />
          </div>
        ) : check == "employee" ? (
          <div className="employee">
            <input
              type="text"
              placeholder="Enter salary"
              className="salary"
              onChange={(e) => {
                setSalary(Number(e.target.value));
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Enter skills"
              className="skills"
              onChange={(e) => {
                let skillsArr: string[] = e.target.value.split(",");
                setSkills(skillsArr);
              }}
            />
            <br />

            <select
              name="position"
              id="position"
              className="position"
              // onChange={(e) => {
              //   // setPosition(e.target.value);
              // }}
            >
              <option value="HR">HR</option>
              <option value="Marketing">Marketing</option>
              <option value="Manager">Manager</option>
            </select>
            <br />
          </div>
        ) : null}

        <br />
        <input type="submit" />
      </form>

      <hr />
      <h3>People</h3>
      <ul>
        {people &&
          people.map((item, idx) => {
            return <li key={idx}>{item.getInfo()}</li>;
          })}
      </ul>
    </>
  );
};

export default FormSection;
