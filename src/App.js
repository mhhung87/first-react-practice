import React, { useState } from "react";
import UsersList from "./components/Users/UsersList";
import NewUser from "./components/NewUser/NewUser";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <React.Fragment>
      <NewUser onAddUser={addUserHandler} />
      <UsersList items={users} />
    </React.Fragment>
  );
}

export default App;
