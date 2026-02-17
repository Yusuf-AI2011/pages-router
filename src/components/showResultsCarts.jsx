import React from "react";

const ShowResultsCarts = (response) => {
  const data = response.data;
  return (
    <div className="wrapperCarts">
      {data.map((item, index) => {
        return (
          <div key={index} className="containerCarts">
            <p className="idCarts">{item.id}</p>

            <div className="productsCarts">
              {item.products.map((item2, index2) => {
                return <p className="productsId">Products ID: {item2.productId}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowResultsCarts;
