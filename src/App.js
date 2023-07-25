import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const dummy_users = [{ id: Math.random().toString(), name: "kev", age: 27 }];
function App() {
  const [addUser, setAddUser] = useState(dummy_users);

  const handleOnSubmitForm = (newUser) => {
    console.log(newUser);
    setAddUser((prevUsers) => {
      return [{ id: Math.random().toString(), ...newUser }, ...prevUsers];
    });
  };
  return (
    <div>
      <AddUser onSubmitForm={handleOnSubmitForm} />
      <UsersList users={addUser}></UsersList>
    </div>
  );
}

export default App;
