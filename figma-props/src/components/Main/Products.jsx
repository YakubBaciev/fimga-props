import React from "react";
import Styles from "./productMap.module.css";

const Products = ({ img, name, price, discount, button }) => {
  return (
    <>
      <div className={Styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={Styles.price}>
        <b>{price}</b>
        <span>{discount}</span>
      </div>
      <span>{name}</span>
      <button>{button}</button>
    </>
  );
};

export default Products;
