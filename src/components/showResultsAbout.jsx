import React from "react";

const ShowResultsAbout = (response) => {
  const data = response.data;
  console.log(data);

  return (
    <div className="wrapperAbouts">
      {data.map((item, index) => {
        return (
          <div key={index} className="containerAbouts">
            <p className="infoAbouts">City: {item.address.city}</p>
            <p className="infoAbouts">Password: {item.password}</p>
            <p className="infoAbouts">Username: {item.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowResultsAbout;
