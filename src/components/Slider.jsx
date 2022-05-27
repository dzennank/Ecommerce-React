import React from 'react'
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Container = styled.div` 
display: flex;
width: 100%;
height: 100vh;
background-color: coral;
position: relative;
`
const Arrow = styled.div`
   width: 25px;
   height: 25px;
    padding: 8px;
    background-color: lightgrey;
    border-radius: 50%;
    display: flex;
    allign-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "20px"};
    right: ${props => props.direction === "right" && "20px"};
    margin: auto;
  

`


const Slider = () => {
  return (
    <Container>
        <Arrow direction = "left">
            <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
            
        </Arrow>

        <Arrow direction = "right">
            <ArrowForwardIosIcon></ArrowForwardIosIcon>   
        </Arrow>
    </Container>
  )
}

export default Slider