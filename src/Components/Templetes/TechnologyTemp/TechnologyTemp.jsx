import "./TechnologyTemp.css";
import TechnologyNavbar from "./TechnologyNavbar/TechnologyNavbar.jsx";
import Header from "../Header/Header.jsx";
function TechnologyTemp(props) {
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
          <img src={props.MobileImage} alt={props.Title} />
        </div>
        <div className="technology__img1">
          <img src={props.DesktopImage} alt={props.Title} />
        </div>
        <TechnologyNavbar />
        <div className="technology__content">
          <p>the terminology...</p>
          <h1>{props.Title}</h1>
          <p>{props.Description}</p>
        </div>
      </div>

      <div className="technology__temp1">
        <div className="technology__img">
          <img src={props.MobileImage} alt={props.Title} />
        </div>
        <div className="technology__img1">
          <img src={props.DesktopImage} alt={props.Title} />
        </div>
        <div className="technology__content">
          <TechnologyNavbar />
          <div className="technology__content__text">
            <p>the terminology...</p>
            <h1>{props.Title}</h1>
            <p>{props.Description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnologyTemp;
