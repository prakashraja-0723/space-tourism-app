import Header from "../../../Templetes/Header/Header.jsx";
import { NavLink } from "react-router-dom";
import "../../../Templetes/TechnologyTemp/TechnologyNavbar/TechnologyNavbar.css";

function LaunchVehicle() {
  return (
    <>
      <Header />
      <div className="page__title">
        <p>
          <span>03 </span>space launch 101
        </p>
      </div>
      <div className="technology__temp">
        <div className="technology__img">
          <img
            src="https://i.ibb.co/c6yW799/image-launch-vehicle-landscape.jpg"
            alt="LAUNCH VECHILE"
          />
        </div>
        <div className="technology__img1">
          <img
            src="https://i.ibb.co/c6yW799/image-launch-vehicle-landscape.jpg"
            alt="LAUNCH VECHILE"
          />
        </div>
        <div className="technology__navbar">
          <ul className="technology__Number__menu">
            <li>
              <NavLink to="/technology/" className="active">
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
        <div className="technology__content">
          <p>the terminology...</p>
          <h1>LAUNCH VEHICLE</h1>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
      <div className="technology__temp1">
        <div className="technology__img">
          <img
            src="https://i.ibb.co/c6yW799/image-launch-vehicle-landscape.jpg"
            alt="LAUNCH VECHILE"
          />
        </div>
        <div className="technology__img1">
          <img
            src="https://i.ibb.co/37drPD4/image-launch-vehicle-portrait.jpg"
            alt="LAUNCH VECHILE"
          />
        </div>
        <div className="technology__content">
          <div className="technology__navbar">
            <ul className="technology__Number__menu">
              <li>
                <NavLink to="/technology/" className="active">
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
          <div className="technology__content__text">
            <p>the terminology...</p>
            <h1>LAUNCH VEHICLE</h1>
            <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LaunchVehicle;
