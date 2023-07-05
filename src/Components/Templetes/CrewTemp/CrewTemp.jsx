import "./CrewTemp.css";
import CrewNavbar from "./CrewNavbar/CrewNavbar.jsx";

function CrewTemp(props) {
  return (
    <>
      <div className="page__title">
        <p>
          <span>02 </span>meet your crew
        </p>
      </div>
      <div className="crew__temp">
        <div className="crew__img">
          <img src={props.Image} alt={props.Role} />
        </div>
        <div className="crew__nav">
          <CrewNavbar />
        </div>
        <div className="crew__content">
          <p>{props.Role}</p>
          <h1>{props.Name}</h1>
          <p>{props.Bio}</p>
        </div>
        <div className="crew__content1">
          <p>{props.Role}</p>
          <h1>{props.Name}</h1>
          <p>{props.Bio}</p>
          <CrewNavbar />
        </div>
      </div>
    </>
  );
}

export default CrewTemp;
