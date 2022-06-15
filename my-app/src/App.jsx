import React, { useState } from "react";

const App = () => {
  const [info, setinfo] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const inputChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;

    setinfo((prevValue) => {
      // console.log(prevValue);
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //     email: prevValue.email,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //     email: prevValue.email,
      //   };
      // } else {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value,
      //   };
      // }

      return {
        ...prevValue,
        [name] : value,
      };
    });
  };

  const onSubmitbtn = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmitbtn}>
        <h1>
          Welcome {info.fName} {info.lName}
        </h1>
        <p>{info.email}</p>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={inputChange}
          value={info.fName}
          name="fName"
        />
        <br />
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={inputChange}
          value={info.lName}
          name="lName"
        />
        <br />
        <input
          type="text"
          placeholder="Enter your email"
          onChange={inputChange}
          value={info.email}
          name="email"
        />
        <br />
        <button type="submit">Click here</button>
      </form>
    </>
  );
};

export default App;
