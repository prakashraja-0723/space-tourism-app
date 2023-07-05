import { NavLink } from "react-router-dom";
import "./DestinationNavbar.css";

function DestinationNavbar() {
  return (
    <>
      <div className="destination__navbar">
        <ul className="destination__menu">
          <li>
            <NavLink to="/destination/" className="menu__name">
              moon
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination/mars" className="menu__name">
              mars
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination/europa" className="menu__name">
              europa
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination/titan" className="menu__name">
              titan
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DestinationNavbar;
