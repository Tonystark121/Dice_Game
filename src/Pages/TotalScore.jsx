import React, { useState } from "react";
import styled from "styled-components";

const TotalScore = ({value, selectedValue, score, isRolled}) => {

  const nums = [1, 2, 3, 4, 5, 6];

  return (
    <MainHeader>
      <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </ScoreContainer>
      <NumberSelector>
        {!value && isRolled && <p style={{color:'red'}}>First Select a Number !!</p>}
        <div className="flex">
          {nums.map((num, id) => (
            <Box
              key={id}
              isSelected={value === num}
              onClick={() => selectedValue(num)}
            >
              {num}
            </Box>
          ))}
        </div>
        <p>Select a Number</p>
      </NumberSelector>
    </MainHeader>
  );
};

export default TotalScore;

const MainHeader = styled.div`
    display:flex;
    align-items:center;
    max-width:1180px;
    margin:auto;
    justify-content:space-between;
    margin-top:40px;
    /* background-color:red; */
    margin-bottom:20px;
`

const NumberSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p{
    font-size:24px;
    font-weight:600;
    margin-top:10px;
  }
`;

const Box = styled.div`
  display: grid;
  place-items: center;
  height: 72px;
  width: 72px;
  border: 1px solid #000;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#000" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
    transition: 0.5s;
  }
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  h1 {
    font-size: 100px;
    font-weight: bold;
  }
  p {
    font-size: 24px;
    font-weight: 600;
  }
`;
