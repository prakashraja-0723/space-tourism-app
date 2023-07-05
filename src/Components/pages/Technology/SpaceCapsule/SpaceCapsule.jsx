import React from "react";
import TechnologyTemp from "../../../Templetes/TechnologyTemp/TechnologyTemp.jsx";

function SpaceCapsule() {
  const SpaceCapsuleData = [
    {
      desktop_img: "https://i.ibb.co/vwSkVkW/image-space-capsule-portrait.jpg",
      mobile_img: "https://i.ibb.co/3TYLBFM/image-space-capsule-landscape.jpg",
      title: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  return (
    <>
      <div className="technology">
        <TechnologyTemp
          MobileImage={SpaceCapsuleData[0].mobile_img}
          DesktopImage={SpaceCapsuleData[0].desktop_img}
          Title={SpaceCapsuleData[0].title}
          Description={SpaceCapsuleData[0].description}
        />
      </div>
    </>
  );
}

export default SpaceCapsule;
