import React from 'react'
import styled from 'styled-components'
import image from '../assets/dices 1.png'

const StartGame = ({toggleBtn}) => {
  return (
    <Container>
       <div className="image">
         <img src={image} alt="Hero Image" />
       </div>
       <div className="text">
         <h1>Dice Game</h1>
         <Button onClick={toggleBtn}>Play Now</Button>
       </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    height:100vh;
    max-width:1180px;
    margin:auto;
    display:flex;
    align-items:center;
    .text{
        display:flex;
        flex-direction:column;
        align-items:flex-end
    }
    .text h1{
        font-size:75px;
        font-weight:bold;
        white-space:nowrap;
    }
`
const Button = styled.button`
    padding: 10px 18px;
    color:#fff;
    background-color:#000;
    border:none;
    font-size:18px;
    font-weight:600;
    min-width:250px;
    border-radius:8px;
    cursor: pointer;

    &:hover{
      background-color:#fff;
      color:#000;
      border:1px solid #000;
      transition: .48s;
    }
`
