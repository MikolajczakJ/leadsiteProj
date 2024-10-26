// UserLogged.jsx
import React from "react";

// Komponent UserLogged
const UserLogged = ({ logged, children }) => (
  <div>
    {logged ? children : <p>Please Login</p>}
  </div>
);

// Komponent UserInfo
const UserInfo = ({ userInfo }) => (
  <div>
    <h1>User ID: {userInfo.id} - {userInfo.username}</h1>
  </div>
);

// Komponent Secret
const Secret = ({ secret }) => <p>Secret: {secret}</p>;

export { UserLogged, UserInfo, Secret };