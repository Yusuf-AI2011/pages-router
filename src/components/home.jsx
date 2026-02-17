import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ShowResultsHome from "./showResultsHome";

const Home = () => {
  const [data, setData] = useState([]);
  const [names, setNames] = useState("");

  function handleText(e) {
    const value = e.target.value;
    if (value.trim()) {
      setNames(value);
      // console.log(value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (names.trim()) {
      setData([...data, names]);
      // console.log(data);
      setNames("");
    }
  }
  return (
    <div className="pageWrapper">
      <header className="header">Home Page</header>
      <form className="inputs">
        <input
          value={names}
          onChange={handleText}
          type="text"
          className="createInput"
        />
        <button onClick={handleSubmit} className="createButton">
          + Create
        </button>
      </form>
      <ShowResultsHome data={data} />
    </div>
  );
};

export default Home;
