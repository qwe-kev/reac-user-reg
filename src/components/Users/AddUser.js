import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "../Users/AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState(" ");
  const [enteredAge, setEnteredAge] = useState(" ");
  const [error, setError] = useState();

  const handleNameChange = (event) => {
    setEnteredUserName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "An error occured",
        message: "please enter name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "An error occured",
        message: "Age must be atleast 1",
      });
      return;
    }

    props.onSubmitForm({ name: enteredUserName, age: enteredAge });
    setEnteredUserName(" ");
    setEnteredAge(" ");
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
            onChange={handleNameChange}
            value={enteredUserName}
          ></input>
          <label htmlFor="age">Age(years)</label>
          <input
            type="number"
            id="age"
            onChange={handleAgeChange}
            value={enteredAge}
          ></input>
          <Button type="button" onClick={AddUserHandler}>
            Add user
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
