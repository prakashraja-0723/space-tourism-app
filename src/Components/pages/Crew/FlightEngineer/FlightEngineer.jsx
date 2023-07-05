import CrewTemp from "../../../Templetes/CrewTemp/CrewTemp.jsx";
import Header from "../../../Templetes/Header/Header.jsx";
import CrewNavbar from "../../../Templetes/CrewTemp/CrewNavbar/CrewNavbar.jsx";

function FlightEngineer() {
  return (
    <>
      <div className="crew">
        <Header />
        <div className="page__title">
          <p>
            <span>02 </span>meet your crew
          </p>
        </div>
        <div className="crew__temp">
          <div className="flight_engineer__img">
            <img
              src="https://i.ibb.co/N6XZvzV/image-anousheh-ansari.png"
              alt="Flight Engineer"
            />
          </div>
          <div className="crew__nav">
            <CrewNavbar />
          </div>
          <div className="crew__content">
            <p>Flight Engineer</p>
            <h1>Anousheh Ansari</h1>
            <p>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
          </div>
          <div className="crew__content1">
            <p>Flight Engineer</p>
            <h1>Anousheh Ansari</h1>
            <p>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
            <CrewNavbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightEngineer;
