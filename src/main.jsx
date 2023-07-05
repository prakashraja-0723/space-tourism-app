import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Destination from "./Components/pages/Destination/Destination.jsx";
import Moon from "./Components/pages/Destination/Moon/Moon.jsx";
import Europa from "./Components/pages/Destination/Europa/Europa.jsx";
import Mars from "./Components/pages/Destination/Mars/Mars.jsx";
import Titan from "./Components/pages/Destination/Titan/Titan.jsx";
import Crew from "./Components/pages/Crew/Crew.jsx";
import Commander from "./Components/pages/Crew/Commander/Commander.jsx";
import MissionSpecialist from "./Components/pages/Crew/MissionSpecialist/MissionSpecialist.jsx";
import Pilot from "./Components/pages/Crew/Pilot/Pilot.jsx";
import FlightEngineer from "./Components/pages/Crew/FlightEngineer/FlightEngineer.jsx";
import Technology from "./Components/pages/Technology/Technology.jsx";
import LaunchVehicle from "./Components/pages/Technology/LaunchVehicle/LaunchVehicle.jsx";
import SpacePort from "./Components/pages/Technology/SpacePort/SpacePort.jsx";
import SpaceCapsule from "./Components/pages/Technology/SpaceCapsule/SpaceCapsule.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={"/destination"} element={<Destination />} />
        <Route path={"/destination/moon"} element={<Moon />} />
        <Route path={"/destination/mars"} element={<Mars />} />
        <Route path={"/destination/europa"} element={<Europa />} />
        <Route path={"/destination/titan"} element={<Titan />} />
        <Route path={"/crew/"} element={<Crew />} />
        <Route path={"/crew/commander"} element={<Commander />} />
        <Route
          path={"/crew/mission_specialist"}
          element={<MissionSpecialist />}
        />
        <Route path={"/crew/pilot"} element={<Pilot />} />
        <Route path={"/crew/flight_engineer"} element={<FlightEngineer />} />
        <Route path={"/technology/"} element={<Technology />} />
        <Route
          path={"/technology/launch_vehicle"}
          element={<LaunchVehicle />}
        />
        <Route path={"/technology/space_port"} element={<SpacePort />} />
        <Route path={"/technology/space_capsule"} element={<SpaceCapsule />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
