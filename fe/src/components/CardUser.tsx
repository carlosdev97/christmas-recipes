import React from "react";

interface CardUserProps {
  username: string;
  email: string;
}

const CardUser: React.FC<CardUserProps> = ({ username, email }) => {
  return (
    <div className="card__user">
      <div className="card__useR-username">{username}</div>
      <div className="carD__user-email">{email}</div>
    </div>
  );
};

export default CardUser;
