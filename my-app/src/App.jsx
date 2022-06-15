import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [putFirstName, setPutFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [putLastName, setPutLastName] = useState("");

  const inputChange = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  };

  const inputChange2 = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };

  const onSubmitbtn = (event) => {
    event.preventDefault();
    setPutFirstName(firstName);
    setPutLastName(lastName);
  };

  return (
    <>
      <form onSubmit={onSubmitbtn}>
        <h1>
          Welcome {putFirstName} {putLastName}
        </h1>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={inputChange}
          value={firstName}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={inputChange2}
          value={lastName}
        />
        <br />
        <button type="submit">Click here</button>
      </form>
    </>
  );
};

export default App;
