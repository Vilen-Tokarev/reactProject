import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../../img/footer/logo.png'
import './style/footer.scss'
function Footer() {
  return (
    <section id="footer" className="footer">
      <div className="container">
        <img src={logo} alt="img"
          className="footer__logo" />
        <div className="footer__wrap">
          <ul className="footer__wrap_firsCollum">
            <li className="footer__wrap_firstCollum_title">
              ПУТЕВОДИТЕЛЬ ПО ГОРОДУ СУДАК
            </li>
            <li className="footer__wrap_firstCollum_text">
              Путеводитель предназначен для быстрого понимания места и удобного изучения различных городов
            </li>
          </ul>
          <ul className="footer__wrap_collum">
            <li className="footer__wrap_collum_title">
              <Link to="/" className="footer__wrap_collum_link">Главная</Link>
            </li>
            <li className="footer__wrap_collum_text">
              <Link to="/#map" className="footer__wrap_collum_link">Карта</Link>
            </li>
            <li className="footer__wrap_collum_text">
              <Link to="/#about" className="footer__wrap_collum_link">Описание</Link>
            </li>
          </ul>
          <ul className="footer__wrap_collum">
            <li className="footer__wrap_collum_title">
              <Link to="/sight" className="footer__wrap_collum_link">Достопримечательности</Link>
            </li>
            <li className="footer__wrap_collum_text">
              <Link to="/sight#searchInput" className="footer__wrap_collum_link">Поиск</Link>
            </li>
            <li className="footer__wrap_collum_text">
              <Link to="/sight#footer" className="footer__wrap_collum_link">Контакты</Link>
            </li>
          </ul>
          <ul className="footer__wrap_collum">
            <li className="footer__wrap_collum_title">
              <Link to="/contact" className="footer__wrap_collum_link">Контакты</Link>
            </li>
            <li className="footer__wrap_collum_text">
              <Link to="/contact" className="footer__wrap_collum_link">FAQ</Link>
            </li>
            <li className="footer__wrap_collum_text">
              <Link to="/contact" className="footer__wrap_collum_link">Связаться с нами</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;