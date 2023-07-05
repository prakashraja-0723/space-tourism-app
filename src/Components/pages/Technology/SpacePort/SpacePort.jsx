import React from "react";
import TechnologyTemp from "../../../Templetes/TechnologyTemp/TechnologyTemp.jsx";

function SpacePort() {
  const SpacePortData = [
    {
      desktop_img: "https://i.ibb.co/jfgdhsd/image-spaceport-portrait.jpg",
      mobile_img: "https://i.ibb.co/Mc7GT37/image-spaceport-landscape.jpg",
      title: "SPACE PORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
  ];
  return (
    <>
      <div className="technology">
        <TechnologyTemp
          MobileImage={SpacePortData[0].mobile_img}
          DesktopImage={SpacePortData[0].desktop_img}
          Title={SpacePortData[0].title}
          Description={SpacePortData[0].description}
        />
      </div>
    </>
  );
}

export default SpacePort;
