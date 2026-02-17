import axios from "axios";
import React, { useState, useEffect } from "react";
import ShowResultsAbout from "./showResultsAbout";

const About = () => {
  let api = `https://fakestoreapi.com/users`;
  const [abouts, setAbouts] = useState([]);

  async function getData(url) {
    const response = await axios.get(url);
    const data = response.data;
    setAbouts(data);
  }
  useEffect(() => {
    getData(api);
  }, []);

  return (
    <div className="pageWrapper">
      <header className="header">About Page</header>

      <div className="About">
        <ShowResultsAbout data={abouts} />
      </div>
    </div>
  );
};

export default About;
