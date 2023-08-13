import React from "react";
import { boxProps } from "../types/globalTypes";
import "../App.css";

const Box = (props: boxProps) => {
  return (
    <>
      <div className="boxImgContainer">
        <img
          className="boxImg"
          src={props.img}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="boxTitle">{props.title}</div>
      <div className="boxPrice">${props.price}</div>
    </>
  );
};

export default Box;
