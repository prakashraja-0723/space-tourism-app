import Header from "../../../Templetes/Header/Header.jsx";
import CrewNavbar from "../../../Templetes/CrewTemp/CrewNavbar/CrewNavbar.jsx";
import "../../../Templetes/CrewTemp/CrewTemp.css";

function Pilot() {
  // const PilotData = [
  //   {
  //     img: "https://i.ibb.co/qBRv0DM/image-victor-glover.png",
  //     role: "PILOT",
  //     name: "Victor Glover",
  //     bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  //   },
  // ];
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
          <div className="pilot__img">
            <img
              src="https://i.ibb.co/qBRv0DM/image-victor-glover.png"
              alt="PILOT"
            />
          </div>
          <div className="crew__nav">
            <CrewNavbar />
          </div>
          <div className="crew__content">
            <p>PILOT</p>
            <h1>Victor Glover</h1>
            <p>
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>
          <div className="crew__content1">
            <p>PILOT</p>
            <h1>Victor Glover</h1>
            <p>
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
            <CrewNavbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pilot;
