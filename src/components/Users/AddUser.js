import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "../Users/AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState(" ");
  const [enteredAge, setEnteredAge] = useState(" ");
  const [error, setError] = useState();

  const enteredName = useRef(0);
  const enteredUserAge = useRef(0);
  const enteredCollege = useRef(0);

  // const handleNameChange = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const handleAgeChange = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredName.current.value == 0 ||
      enteredUserAge.current.value == 0 ||
      enteredCollege.current.value == 0
    ) {
      setError({
        title: "An error occured",
        message: "please enter name, age and college",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "An error occured",
        message: "Age must be atleast 1",
      });
      return;
    }

    props.onSubmitForm({
      name: enteredName.current.value,
      age: enteredUserAge.current.value,
      college: enteredCollege.current.value,
    });
    enteredName.current.value = " ";
    enteredUserAge.current.value = " ";
    enteredCollege.current.value = " ";
    // setEnteredUserName(" ");
    // setEnteredAge(" ");
  };

  const onConfirm = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onConfirm}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            ref={enteredName}
            // onChange={handleNameChange}
            // value={enteredUserName}
          ></input>
          <label htmlFor="age">Age(years)</label>
          <input
            type="number"
            id="age"
            // onChange={handleAgeChange}
            // value={enteredAge}
            ref={enteredUserAge}
          ></input>
          <label htmlFor="college">College</label>
          <input type="text" ref={enteredCollege}></input>
          <Button type="button" onClick={AddUserHandler}>
            Add user
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
