//imports
import React, { useState } from "react";
import "../index.css";
import "../App.css";
import LandingPage from "./LandingPage";
import Co2Graph from "./Co2Graph";
import Predictions from "./Predictions";

//HomePage element function
export default function HomePage() {
  const [active, setActive] = useState("Hide");

  return (
    <>
      {/* Problem Introduction */}
      <LandingPage />

      {/* CO2 level graph from year 2007 to 2021*/}
      <Co2Graph />
      {/* Predictions */}
      <div className="leadMagnet my-14 sm:px-2">
        <div className="hp-t leadMagnet-text mb-4">
          Wanna know how many people will be effected by Air Pollution?
        </div>
      </div>
      {/* Show and Hide Buttons */}
      <div className="button">
        <button
          className="bt1 bg-green text-white font-bold py-5 px-10  rounded-2xl"
          onClick={() => setActive("Show")}
        >
          Show
        </button>
      </div>
      <div className="button">
        <button
          className="bt2 bg-red text-white font-bold py-5 px-10 rounded-2xl"
          onClick={() => setActive("Hide")}
        >
          Hide
        </button>
      </div>
      <div>
        {active === "Show" && <Predictions />}
        {active === "Hide" && <></>}
      </div>
    </>
  );
}
