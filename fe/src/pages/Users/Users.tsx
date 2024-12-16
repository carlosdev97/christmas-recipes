import React from "react";
import { CardUser } from "../../components";
import useFetchUsers from "../../hooks/useFetchUsers";
import "./Users.css";

export const Users: React.FC = () => {
  const { users, loading } = useFetchUsers();

  if (loading) {
    return <div className="users__loader">Loading users . . . ✨</div>;
  }

  return (
    <div className="users">
      {users.map((user) => (
        <CardUser user={user} />
      ))}
    </div>
  );
};
