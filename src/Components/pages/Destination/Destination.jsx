import "./Destination.css";
import Moon from "./Moon/Moon.jsx";

function Destination() {
  const MoonData = [
    {
      title: "MOON",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      days: "3 days",
      img: "https://i.ibb.co/WxhgXkc/image-moon.png",
    },
  ];
  return (
    <>
      <div className="destination">
        <Moon
          Title={MoonData[0].title}
          Description={MoonData[0].description}
          Distance={MoonData[0].distance}
          Days={MoonData[0].days}
          Image={MoonData[0].img}
        />
      </div>
    </>
  );
}

export default Destination;
