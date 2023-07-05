import { NavLink } from "react-router-dom";
import "./CrewNavbar.css";

function CrewNavbar() {
  return (
    <>
      <div className="crew__navbar">
        <ul className="crew__bullet__menu">
          <li>
            <NavLink to="/crew/" className="menu__bullet"></NavLink>
          </li>
          <li>
            <NavLink
              to="/crew/mission_specialist "
              className="menu__bullet"
            ></NavLink>
          </li>
          <li>
            <NavLink to="/crew/pilot" className="menu__bullet"></NavLink>
          </li>
          <li>
            <NavLink
              to="/crew/flight_engineer"
              className="menu__bullet"
            ></NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CrewNavbar;
