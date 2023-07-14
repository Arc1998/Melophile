import React from "react";
import { useNavigate } from "react-router-dom";
import "./DefaultLayout.css";
import { Button } from "../../atom/Button";


const DefaultLayout = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/home");
  };

  return (
    <div className="default-layout">
      <div className="left-content">
        <h1 className="heading">
          Welcome to Your Music !
        </h1>
        <p className="paragraph">
          Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.
        </p>
        <Button
        variant="primary"
        size={"large"}
        text={"Explore Now !"}
        type={"submit"}
        onClick={handleExplore}
      />
      </div>
    </div>
  );
};

export default DefaultLayout;
