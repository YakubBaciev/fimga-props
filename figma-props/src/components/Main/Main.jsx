import React from "react";
import Sidebar from "./Sidebar";
import ProductMap from "./ProductMap";
import Styles from "./main.module.css";

const Main = () => {
  return (
    <div className={Styles.mainContiner}>
      <div className={Styles.conteiner}>
        <Sidebar />
        <ProductMap />
      </div>
    </div>
  );
};

export default Main;
