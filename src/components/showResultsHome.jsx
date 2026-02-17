import React from "react";

const showResultsHome = (datas, setData) => {
  const data = datas?.data;

  function deleteFunction(index) {
    const newTask = document.querySelector(".newTask");
  }

  return (
    <div className="homeContainer">
      <div className="newTasks">
        {data.map((item, index) => (
          <div key={index} className="newTask">
            <p className="idTask">{index + 1}</p>
            <p className="nameTask">{data[index]}</p>
            <button
              onClick={() => deleteFunction(index)}
              className="buttonDelete"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default showResultsHome;
