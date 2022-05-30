import React from 'react'
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
  

`
const Wrapper = styled.div`
height: 100%;
  display: flex;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  
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
  return (
    <Container>
        <Arrow direction = "left">
            <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
        </Arrow>
        <Wrapper>
           <Slide> 
            <ImgContainer>
               <Image src = "https://i.ibb.co/DG69bQ4/2.png"></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>Sumer Sale</Title>
                <Desc>ASDsadasf SADSADsafa fds fdss gfdgdfdsf  d fsf sf  dsf</Desc>
                <Button>Show Now</Button>
            </InfoContainer>
            </Slide>
            <Slide> 
            <ImgContainer>
               <Image src = "https://i.ibb.co/DG69bQ4/2.png"></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>Sumer Sale</Title>
                <Desc>ASDsadasf SADSADsafa fds fdss gfdgdfdsf  d fsf sf  dsf</Desc>
                <Button>Show Now</Button>
            </InfoContainer>
            </Slide>
        </Wrapper><Slide> 
            <ImgContainer>
               <Image src = "https://i.ibb.co/DG69bQ4/2.png"></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>Sumer Sale</Title>
                <Desc>ASDsadasf SADSADsafa fds fdss gfdgdfdsf  d fsf sf  dsf</Desc>
                <Button>Show Now</Button>
            </InfoContainer>
            </Slide>
        <Arrow direction = "right">
            <ArrowForwardIosIcon></ArrowForwardIosIcon>   
        </Arrow>
    </Container>
  )
}

export default Slider