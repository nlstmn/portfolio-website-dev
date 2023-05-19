import { useEffect } from "react";
import { scroll_ } from "../utilits";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", scroll_);
  }, []);

  return (
    <div className="tonni_tm_header">
      <div className="container bigger">
        <div className="header_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/logo.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Кратко</a>
              </li>
              <li>
                <a href="#about">Обо мне</a>
              </li>
              <li>
                <a href="#service">Услуги</a>
              </li>
              <li>
                <a href="#portfolio">Портфолио</a>
              </li>
              <li>
                <a href="#clients">Клиенты</a>
              </li>
              <li>
                <a href="#contact">Связаться</a>
              </li>
            </ul>
            <span className="ccc" />
          </div>
          <div className="follow">
            <span>Связаться напрямую:</span>
            <ul>
              <li>
                <a href="https://t.me/kristina_venichenko">
                  <img
                    className="svg"
                    src="img/svg/social/telegram.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
