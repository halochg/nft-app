import React from "react";
import Box from "./box";
import { boxProps } from "../types/globalTypes";
import "../App.css";

export interface BoxListingProps {
  resultList: boxProps[];
}

const BoxListing = (props: BoxListingProps) => {
  return (
    <>
      <div className="boxListing">
        {props.resultList.length > 0 &&
          props.resultList.map((item: boxProps, index: number) => {
            return (
              <div key={index} className="box">
                <Box img={item.img} title={item.title} price={item.price} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BoxListing;
