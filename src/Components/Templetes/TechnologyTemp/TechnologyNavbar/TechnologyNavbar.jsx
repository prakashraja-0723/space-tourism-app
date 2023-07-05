import "./TechnologyNavbar.css";
import { NavLink } from "react-router-dom";

function TechnologyNavbar() {
  return (
    <>
      <div className="technology__navbar">
        <ul className="technology__Number__menu">
          <li>
            <NavLink to="/technology/">
              <span>1</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology/space_port">
              <span>2</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology/space_capsule">
              <span>3</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TechnologyNavbar;
