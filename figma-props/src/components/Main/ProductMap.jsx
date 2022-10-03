import React from "react";
import Styles from "./productMap.module.css";
import Products from "./Products";

const ProductMap = () => {
  return (
    <div className={Styles.conteiner}>
      <div className={Styles.card1}>
        <Products
          img="https://3dnews.ru/assets/external/illustrations/2020/11/10/1025052/31232312.jpg"
          name="macBook"
          price="97000p"
          discount="100000p"
          button="купить"
        />
      </div>
      <div className={Styles.card2}>
        <Products
          img="https://3dnews.ru/assets/external/illustrations/2020/11/10/1025052/31232312.jpg"
          name="macBook"
          price="97000p"
          discount="100000p"
          button="купить"
        />
      </div>
      <div className={Styles.card3}>
        <Products
          img="https://3dnews.ru/assets/external/illustrations/2020/11/10/1025052/31232312.jpg"
          name="macBook"
          price="97000p"
          discount="100000p"
          button="купить"
        />
      </div>
      <div className={Styles.card4}>
        <Products
          img="https://3dnews.ru/assets/external/illustrations/2020/11/10/1025052/31232312.jpg"
          name="macBook"
          price="97000p"
          discount="100000p"
          button="купить"
        />
      </div>
      <div className={Styles.card5}>
        <Products
          img="https://3dnews.ru/assets/external/illustrations/2020/11/10/1025052/31232312.jpg"
          name="macBook"
          price="97000p"
          discount="100000p"
          button="купить"
        />
      </div>
      <div className={Styles.card6}>
        <Products
          img="https://3dnews.ru/assets/external/illustrations/2020/11/10/1025052/31232312.jpg"
          name="macBook"
          price="97000p"
          discount="100000p"
          button="купить"
        />
      </div>
    </div>
  );
};

export default ProductMap;
