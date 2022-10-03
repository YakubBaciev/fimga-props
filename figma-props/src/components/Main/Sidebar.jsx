import React from 'react';
import Styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={Styles.conteiner}>
      <h4 className={Styles.gadgets}>Гаджеты и аксесуары</h4>
      <hr />
      <h4 className={Styles.technique}>Бытовая техника</h4>
      <hr />
      <h4 className={Styles. other}>Прочее</h4>
      
    </div>
  );
};

export default Sidebar;