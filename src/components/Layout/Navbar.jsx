import React from 'react';
import { FcAndroidOs } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io';
import style from './Layout.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <NavLink
          className={`${style.logo} ${({ isActive }) =>
            isActive ? style.activeLink : ''}`}
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          <FcAndroidOs className={style.icon} />
          <IoLogoApple className={style.icon} />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/laptops"
              className={({ isActive }) => (isActive ? style.activeLink : '')}
            >
              Ноутбуки
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pads"
              className={({ isActive }) => (isActive ? style.activeLink : '')}
            >
              Планшеты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cellPhones"
              onClick={() => window.scrollTo(0, 0)}
              className={({ isActive }) => (isActive ? style.activeLink : '')}
            >
              Телефоны
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/watchs"
              className={({ isActive }) => (isActive ? style.activeLink : '')}
            >
              Часы
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessories"
              className={({ isActive }) => (isActive ? style.activeLink : '')}
            >
              Аксессуары
            </NavLink>
          </li>
        </ul>
        <div className={style.cart}>
          <img src="" alt="" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
