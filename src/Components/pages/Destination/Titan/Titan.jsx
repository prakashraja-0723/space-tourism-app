import "../Destination.css";
import DestinationTemp from "../../../Templetes/DestinationTemp/DestinationTemp.jsx";
import Header from "../../../Templetes/Header/Header.jsx";

function Titan() {
  const TitanData = [
    {
      title: "TITAN",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      days: "7 years",
      img: "https://i.ibb.co/YXrgMpH/image-titan.png",
    },
  ];
  return (
    <>
      <div className="destination">
        <Header />
        <DestinationTemp
          Title={TitanData[0].title}
          Description={TitanData[0].description}
          Distance={TitanData[0].distance}
          Days={TitanData[0].days}
          Image={TitanData[0].img}
        />
      </div>
    </>
  );
}

export default Titan;
