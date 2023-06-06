import React from 'react';
import style from './Layout.module.css';
import { FcAndroidOs } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io';
function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.logo}>
          <FcAndroidOs className={style.icon} />
          <IoLogoApple className={style.icon} />
        </div>
        <ul>
          <li>Ноутбуки</li>
          <li>Планшеты</li>
          <li>Телефоны</li>
          <li>Часы</li>
          <li>Аксессуары</li>
        </ul>
        <div className={style.cart}>
          <img src="" alt="" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
