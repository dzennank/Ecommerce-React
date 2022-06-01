import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled.div`
    height: 80px;
    displey: flex;
    
    

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`
const Center = styled.div`
flex: 1;
padding: 20px;

`
const Right = styled.div`
flex: 1;
padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`

    margin: 20px 130vh 20px 0;
    
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #${(props) => props.color};
        color:white;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    
`




const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LOGO</Logo>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Desc>
             <SocialContainer>
                 <SocialIcon color="3B5999">
                    <FacebookIcon></FacebookIcon>
                 </SocialIcon>
                 <SocialIcon color="E4405F">
                    <InstagramIcon></InstagramIcon>
                 </SocialIcon>
                 <SocialIcon color="0000FF">
                    <LinkedInIcon></LinkedInIcon>
                 </SocialIcon>
             </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer