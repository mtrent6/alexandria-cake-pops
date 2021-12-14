import React from "react";
import "../../common/styles/common.css";

const Order = (props) => {
  //@ts-ignore
  const image = props?.location?.state?.image;
  const price = props?.location?.state?.price;

  return (
    <div className="wrapper">
      <div>
      order page
      </div>
      <div>
      {image ? <img style={{height: 800, width: 800}} src={image} /> : null}
      </div>
      <div>{price ? price : null}</div>
    </div>
  );
};

export default Order;
