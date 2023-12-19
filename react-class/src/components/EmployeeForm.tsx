const EmployeeForm = () => {
  return (
    <div className="employee">
      <input type="text" placeholder="Enter salary" className="salary" />
      <br />
      <input type="text" placeholder="Enter skills" className="skills" />
      <br />

      <select name="position" id="position" className="position">
        <option value="HR">HR</option>
        <option value="Marketing">Marketing</option>
        <option value="Manager">Manager</option>
      </select>
      <br />
    </div>
  );
};

export default EmployeeForm;
