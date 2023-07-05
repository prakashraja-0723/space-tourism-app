import Header from "../../../Templetes/Header/Header.jsx";
import { NavLink } from "react-router-dom";
import "../../../Templetes/CrewTemp/CrewNavbar/CrewNavbar.css";

function Commander() {
  return (
    <>
      <Header />
      <div className="page__title">
        <p>
          <span>02 </span>meet your crew
        </p>
      </div>
      <div className="crew__temp">
        <div className="commander__img">
          <img
            src="https://i.ibb.co/dDfQJwC/image-douglas-hurley.png"
            alt="commander"
          />
        </div>
        <div className="crew__nav">
          <div className="crew__navbar">
            <ul className="crew__bullet__menu">
              <li>
                <NavLink to="/crew/" className="menu__bullet active"></NavLink>
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
        </div>
        <div className="crew__content">
          <p>commander</p>
          <h1>Douglas Hurley</h1>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <div className="crew__content1">
          <p>commander</p>
          <h1>Douglas Hurley</h1>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <div className="crew__navbar">
            <ul className="crew__bullet__menu">
              <li>
                <NavLink to="/crew/" className="menu__bullet active"></NavLink>
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
        </div>
      </div>
      <style></style>
    </>
  );
}

export default Commander;
