import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../../img/header/logo.png'
import './style/header.scss'
function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="header__box">
          <img src={logo} alt="img" className="header__logo" />
          <div className="header__nav">
            <ul className="header__nav_text">
              <li className="header__nav_text_btn">
                <Link className="header__nav_text-btn" to="/">Главная</Link>
              </li>
              <li className="header__nav_text_btn">
                <Link className="header__nav_text-btn" to="/sight">Достопримечательности</Link>
              </li>
              <li className="header__nav_text_btn">
                <Link className="header__nav_text-btn" to="/contact">Контакты</Link>
              </li>
              <li className="header__nav_text_btn">
                <Link className="header__nav_text-btn" to="/contact">Связаться с нами</Link>
              </li>
            </ul>
          </div>
          <div className="burger__menu">
            <div className="burger__icon" id="burgerIcon">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="burger__menu-items" id="menuItems">
              <Link to="/">Главная</Link>
              <Link to="/contact">Контакты</Link>
              <Link to="/sight">Достопримечательности</Link>
            </div>
          </div>
          <div className="header__contact">
            <p className="header__contact_text">
              +7 999 999-99-99 <br />
              pytevoditel@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;