import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowResultsCarts from "./showResultsCarts";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  let api = `https://fakestoreapi.com/carts`;

  async function getData(url) {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    setCarts(data);
  }
  useEffect(() => {
    getData(api);
  }, []);

  return (
    <div className="pageWrapper">
      <header className="header">Carts Page</header>

      <div className="Carts">
        <ShowResultsCarts data={carts} />
      </div>
    </div>
  );
};

export default Carts;
