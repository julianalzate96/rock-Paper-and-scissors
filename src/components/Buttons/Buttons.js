import React, { useState } from "react";
import { connect } from "react-redux";
import "./buttons.scss";

const mapStateToProps = state => {
  return {
    random: state.random
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRandom: item => {
      dispatch({ type: "RANDOM", value: item });
    }
  };
};

function Buttons({ left = false, right = false, random, handleRandom }) {
  const [choice, setChoice] = useState("");

  const handleChoice = item => {
    if (left) {
      setChoice(item);
      handleRandom(item);
    }
  };

  return (
    <div className={`buttons-container ${left && `left`} ${right && `right`}`}>
      <div className="buttons">
        <button onClick={() => handleChoice("Rock")}>Rock</button>
        <button onClick={() => handleChoice("Paper")}>Paper</button>
        <button onClick={() => handleChoice("Scissors")}>scissors</button>
      </div>
      <div className="big-choice">
        <button>{left ? choice : random}</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
