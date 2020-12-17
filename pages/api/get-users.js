const getUsers = (_req, res) =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      return res.json(users);
    });

export default getUsers;
