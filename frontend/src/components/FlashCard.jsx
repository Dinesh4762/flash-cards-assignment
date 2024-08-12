import React, { useState } from "react";
import "../App.css";
import Thala from "../assets/thala.jpg";

const Flashcard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // Toggle the flipped state
  };

  return (
    <div
      className={`flashcard-container font-inter ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="flashcard">
        <div className="question grid place-content-center shadow-lg shadow-white/20">
          <span className="text-[#CA1617] font-medium">Question</span>
          <div className="content font-medium">{question}</div>
        </div>
        <div className="answer grid place-content-center shadow-lg shadow-white/20">
          <span className="text-[#4DB925] font-medium">Answer</span>
          <div className="content font-medium">{answer}</div>
          {answer === "7" && (
            <img src={Thala} className="w-24 h-24" alt="Thala" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
