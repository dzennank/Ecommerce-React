import React from 'react'
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from '../data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div` 
display: flex;
width: 100%;
height: 100vh;
position: relative;
`
const Arrow = styled.div`
   width: 25px;
   height: 25px;
    padding: 10px;
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
    opacity: 0.5;
    z-index: 2;

`
const Wrapper = styled.div`
height: 100%;
  display: flex;
  transition: all 1.5 ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;

const Image = styled.img`
height: 100%;


`
const ImgContainer = styled.div`
height: 100%;
  flex: 1;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`

const Desc = styled.p`
margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 20%;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    const handleSubmit = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
        }
    }
  return (
    <Container>
        <Arrow direction = "left" onClick={() => handleSubmit("left") }>
            <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg = {item.bg} key = {item.id}> 
            <ImgContainer>
               <Image src = {item.img}></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to="/productList">
                  <Button>Show Now</Button>
                </Link>
            </InfoContainer>
            </Slide>
            ) )}
           
            
        </Wrapper>
        <Arrow direction = "right" onClick={() => handleSubmit("right")}>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>   
        </Arrow>
    </Container>
  )
}

export default Slider