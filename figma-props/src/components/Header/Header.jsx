import React from "react";
import styles from "./header.module.css";
import { BsBag } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.conteiner}>
        <div className={styles.brand}>
          <h3>Intocode Coding Shopcamp</h3>
        </div>
        <div className={styles.cart}>
          <div className={styles.amount}>2</div>
          <BsBag className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
