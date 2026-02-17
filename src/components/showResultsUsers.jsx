import React, { useEffect } from "react";

const ShowResultsUsers = (response) => {
  const data = response.data;
  console.log(data);

  return (
    <div className="wrapperUsers">
      {data.map((item, index) => {
        return (
          <div className="containerUsers" key={index}>
            <div className="infosUsers">
              <p className="infoUsers">{item.name.firstname}</p>
              <p className="infoUsers">{item.name.lastname}</p>
            </div>

            <p className="infoUsers">{item.email}</p>
            <p className="infoUsers">{item.phone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowResultsUsers;
