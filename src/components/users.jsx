import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowResultsUsers from "./showResultsUsers";

const Users = () => {
  let api = `https://fakestoreapi.com/users`;
  const [users, setUsers] = useState([]);
  async function getData(url) {
    const response = await axios.get(url);
    const data = response.data;
    setUsers(data);
  }
  useEffect(() => {
    getData(api);
  }, []);

  return (
    <div className="pageWrapper">
      <header className="header">Users Page</header>
      <div className="Users">
        <ShowResultsUsers data={users} />
      </div>
    </div>
  );
};

export default Users;
