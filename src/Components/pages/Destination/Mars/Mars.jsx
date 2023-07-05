import "../Destination.css";
import Header from "../../../Templetes/Header/Header.jsx";
import DestinationTemp from "../../../Templetes/DestinationTemp/DestinationTemp.jsx";

function Mars() {
  const MarsData = [
    {
      title: "MARS",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. km",
      days: "9 months",
      img: "https://i.ibb.co/SVJH9JF/image-mars.png",
    },
  ];
  return (
    <>
      <div className="destination">
        <Header />
        <DestinationTemp
          Title={MarsData[0].title}
          Description={MarsData[0].description}
          Distance={MarsData[0].distance}
          Days={MarsData[0].days}
          Image={MarsData[0].img}
        />
      </div>
    </>
  );
}

export default Mars;
