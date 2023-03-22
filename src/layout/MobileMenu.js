import { useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="tonni_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/logo.png" alt="" />
            </a>
          </div>
          <div className="trigger">
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
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
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
