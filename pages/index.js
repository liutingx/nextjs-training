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
        setUsers(usersDetails);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      User Profiles
      <br />
      <div data-testid="profiles-list">
        {users.map((user) => (
          <ul key={user.id}>
            <li>Name: {user.name} </li>
            <li data-testid={`username-${user.id}`}>
              Username: {user.username}&nbsp;
            </li>
            <li>Email: {user.email} </li>
            <li>Address: {user.address.city} </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      some: "data",
    },
  };
};

export default IndexPage;
