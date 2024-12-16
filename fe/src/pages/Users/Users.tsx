import React from "react";
import CardUser from "../../components/CardUser";
import useFetchUsers from "../../hooks/useFetchUsers";
import "./Users.css";

const Users: React.FC = () => {
  const { users, loading } = useFetchUsers();

  if (loading) {
    return <div>Loading users . . . ✨</div>;
  }

  return (
    <div className="users">
      {users.map((user) => (
        <CardUser user={user} />
      ))}
    </div>
  );
};

export default Users;
