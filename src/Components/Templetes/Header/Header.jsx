import { NavLink } from "react-router-dom";

import "./Header.css";
const Header = () => {
  const openMenu = (e) => {
    const navBar = document.querySelector(".header__nav__list__bg");
    e.preventDefault();
    navBar.style.right = "0";
    navBar.style.transition = ".5s ease-in-out";
  };
  const closeMenu = (e) => {
    const navBar = document.querySelector(".header__nav__list__bg");
    e.preventDefault();
    navBar.style.right = "-100%";
    navBar.style.transition = ".5s ease-in-out";
  };
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <NavLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </NavLink>
        </div>
        <div className="hr__line"></div>
        <div className="header__nav">
          <div className="header__menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              cursor="pointer"
              onClick={openMenu}
            >
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          </div>
          <div className="header__nav__list__bg">
            <div className="header__close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                cursor="pointer"
                onClick={closeMenu}
              >
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                </g>
              </svg>
            </div>
            <ul className="header__nav__list">
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
        </div>
      </header>
    </>
  );
};
export default Header;
