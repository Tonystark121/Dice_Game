import React, { useState } from "react";
import styled from "styled-components";
import image1 from "../assets/dice_1.png";
import image2 from "../assets/dice_2.png";
import image3 from "../assets/dice_3.png";
import image4 from "../assets/dice_4.png";
import image5 from "../assets/dice_5.png";
import image6 from "../assets/dice_6.png";
import Rules from "./Rules";

const RollDice = ({ currDice, rollDice, value, resetScore,showRules, toggleRule }) => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <Container>
      <div className="dice" onClick={rollDice}>
        <img
          src={value && rollDice ? images[currDice - 1] : images[0]}
          alt="Dice Image"
        />
        <p>Click on image to Roll Dice</p>
      </div>
      <div className="btns">
        <button className="btn" onClick={resetScore}>
          Reset Score
        </button>
        <button onClick={toggleRule}>Show Rules</button>
      </div>
      {showRules && <Rules />}
    </Container>
  );
};

export default RollDice;

const Container = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-size: 16px;
    font-weight: 600;
    margin-top: 12px;
  }
  .btns {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    margin-bottom:20px;
  }
  .btn {
    background-color: #fff !important;
    color: #000 !important;
    border: 1px solid #000 !important;
    &:hover {
      background-color: #000 !important;
      color: #fff !important;
    }
  }

  button {
    padding: 10px 18px;
    color: #fff;
    background-color: #000;
    border: none;
    font-size: 18px;
    font-weight: 600;
    min-width: 250px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
      transition: 0.48s;
    }
  }
`;
