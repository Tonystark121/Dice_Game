import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play the dice game</h2>
      <div className="text">
        <p>Select any Number</p>
        <p>Click on dice to roll</p>
        <p>
          after click id dice number equals to selected number then total score
          get increased bt 10 else reduced by 5
        </p>
        <p>If total score goes to 0 or Less you Lose</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  max-width:800px;
  margin:auto;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .text{
    margin-top:24px;
  }
`;
