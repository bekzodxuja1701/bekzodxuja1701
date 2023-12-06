import React from "react";
import { UserItem } from "./UserItem";

const UsersList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
