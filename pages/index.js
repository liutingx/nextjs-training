import React, { useEffect, useState } from "react";

/**
 *
 * ES6 Array methods
 *  - .map
 *  - .reduce
 *  - .filter
 *  - .forEach
 *
 * React hook
 *  - useEffect
 *  - useState
 */

const IndexPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/get-users")
      .then((response) => response.json())
      .then((usersDetails) => {
        console.log("usersDetails", usersDetails);
        setUsers(usersDetails);
      });
  }, []);

  return (
    <div>
      User Profiles
      <br />
      {users.map((user) => (
        <ul key={user.id}>
          <li>Name: {user.name} </li>
          <li>Username: {user.username} </li>
          <li>Email: {user.email} </li>
          <li>Address: {user.address.city} </li>
        </ul>
      ))}
    </div>
  );
};

export default IndexPage;
