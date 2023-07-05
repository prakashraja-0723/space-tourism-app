import Header from "../../../Templetes/Header/Header.jsx";
import { NavLink } from "react-router-dom";

function Moon(props) {
  return (
    <>
      <Header />
      <div className="page__title">
        <span>01 </span>
        <p>pick your destination</p>
      </div>
      <div className="destination__temp">
        <div className="destination__img">
          <img src={props.Image} alt={props.Title} />
        </div>
        <div className="destination__navbar">
          <ul className="destination__menu">
            <li>
              <NavLink to="/destination/" className="menu__name active">
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
        <div className="destination__content">
          <h1>{props.Title}</h1>
          <p>{props.Description}</p>
        </div>
        <div className="destination__hrline"></div>
        <div className="destination__travel__time">
          <div className="distance">
            <p>AVG. DISTANCE</p>
            <p>{props.Distance}</p>
          </div>
          <div className="travel">
            <p>Est. travel time</p>
            <p>{props.Days}</p>
          </div>
        </div>
      </div>
      <div className="destination__temp1">
        <div className="destination__img1">
          <img src={props.Image} alt={props.Title} />
        </div>
        <div className="destination__content1">
          <div className="destination__navbar">
            <ul className="destination__menu">
              <li>
                <NavLink to="/destination/" className="menu__name active">
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
          <h1>{props.Title}</h1>
          <p>{props.Description}</p>
          <div className="destination__hrline1"></div>
          <div className="destination__travel__time1">
            <div className="distance1">
              <p>AVG. DISTANCE</p>
              <p>{props.Distance}</p>
            </div>
            <div className="travel1">
              <p>Est. travel time</p>
              <p>{props.Days}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moon;
