import { NavLink } from "react-router-dom";

import "./Header.css";
const Header = () => {
  const openMenu = (e) => {
    const navBar = document.querySelector(".header__nav__list");
    e.preventDefault();
    navBar.style.right = "0";
    navBar.style.transition = ".5s ease-in-out";
  };
  const closeMenu = (e) => {
    const navBar = document.querySelector(".header__nav__list");
    e.preventDefault();
    navBar.style.right = "-70%";
    navBar.style.transition = ".5s ease-in-out";
  };
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img src="src/assets/shared/logo.svg" alt="Space Tourism App" />
          </NavLink>
        </div>
        <div className="hr__line"></div>
        <div className="header__nav">
          <div className="header__menu">
            <img
              src="/src/assets/shared/icon-hamburger.svg"
              alt=""
              onClick={openMenu}
              style={{ cursor: "pointer" }}
            />
          </div>
          <ul className="header__nav__list">
            <div className="header__close">
              <img
                src="/src/assets/shared/icon-close.svg"
                alt=""
                onClick={closeMenu}
                style={{ cursor: "pointer" }}
              />
            </div>
            <li className="header__nav__list__item">
              <NavLink to="/">
                <span>00 </span>home
              </NavLink>
            </li>
            <li className="header__nav__list__item">
              <NavLink to="/destination">
                <span>01 </span>destination
              </NavLink>
            </li>
            <li className="header__nav__list__item">
              <NavLink to="/crew">
                <span>02 </span>crew
              </NavLink>
            </li>
            <li className="header__nav__list__item">
              <NavLink to="/technology">
                <span>03 </span>technology
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
