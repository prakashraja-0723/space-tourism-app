import Header from "../../../Templetes/Header/Header.jsx";
import CrewTemp from "../../../Templetes/CrewTemp/CrewTemp.jsx";

function MissionSpecialist() {
  const MissionSpecialistData = [
    {
      img: "https://i.ibb.co/dp2HxZN/image-mark-shuttleworth.png",
      role: "Mission Specialist",
      name: "MARK SHUTTLEWORTH",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
  ];
  return (
    <>
      <div className="crew">
        <Header />
        <CrewTemp
          Image={MissionSpecialistData[0].img}
          Role={MissionSpecialistData[0].role}
          Name={MissionSpecialistData[0].name}
          Bio={MissionSpecialistData[0].bio}
        />
      </div>
    </>
  );
}

export default MissionSpecialist;
