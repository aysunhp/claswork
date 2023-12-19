const StudentsForm = () => {
  return (
    <div className="student">
      <input type="text" placeholder="Enter group name" className="groupName" />
      <br />
      <input type="text" placeholder="Enter hobbies" className="hobbies" />
      <br />
      <input type="text" placeholder="Enter GPA" className="GPA" />
      <br />
    </div>
  );
};

export default StudentsForm;
