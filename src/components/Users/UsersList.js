import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  console.log("userlist props", props);
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old, {user.college} college)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
