import "../Destination.css";
import Header from "../../../Templetes/Header/Header.jsx";
import DestinationTemp from "../../../Templetes/DestinationTemp/DestinationTemp.jsx";

function Europa() {
  const EuropaData = [
    {
      title: "EUROPA",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      days: "3 years",
      img: "https://i.ibb.co/TbDxf1v/image-europa.png",
    },
  ];
  return (
    <>
      <div className="destination">
        <Header />
        <DestinationTemp
          Title={EuropaData[0].title}
          Description={EuropaData[0].description}
          Distance={EuropaData[0].distance}
          Days={EuropaData[0].days}
          Image={EuropaData[0].img}
        />
      </div>
    </>
  );
}

export default Europa;
