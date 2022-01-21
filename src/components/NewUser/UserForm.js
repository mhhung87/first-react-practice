import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();
  // const [userInput, setUserInput] = useState({
  //   enteredName: "",
  //   enteredAge: "",
  // }); // controlled approach, becuase internal state is controlled by react

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value; // alternative way to access value
    const enteredAge = ageInputRef.current.value; // uncontrolled input component
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Empty input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1 || +enteredAge > 100) {
      setError({
        title: "Invalid age",
        message: "Please enter a reasonable age (1 ~ 100).",
      });
      return;
    }
    const userData = {
      name: enteredName,
      age: enteredAge,
    };
    props.onSaveUserData(userData);
    nameInputRef.current.value = ""; // rarely do that
    ageInputRef.current.value = "";
    // setUserInput({
    //   enteredName: "",
    //   enteredAge: "",
    // });
  };

  // const nameChangeHandler = (event) => {
  //   setUserInput((prevInput) => {
  //     return { ...prevInput, enteredName: event.target.value };
  //   });
  // };
  // const ageChangeHandler = (event) => {
  //   setUserInput((prevInput) => {
  //     return { ...prevInput, enteredAge: event.target.value };
  //   });
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCancelError={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            // value={userInput.enteredName}
            // onChange={nameChangeHandler}
            ref={nameInputRef}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            step="1"
            // value={userInput.enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
