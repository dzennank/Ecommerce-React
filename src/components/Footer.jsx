import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
    

`
const Wrapper = styled.div`

display: flex;
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
    margin-bottom: 30px;

`
const Desc = styled.p`

    
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
        margin-top: 30px;

    
`
const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
  margin-bottom: 10px;
`

const ContactInfo = styled.div`
  padding: 5px;
`
const Icon = styled.div`

`
const Phone = styled.p`
  margin-left: 20px;
  font-size: 20px;
`
const Email = styled.p`
  margin-left: 20px;
  font-size: 20px;
`


const Footer = () => {
  return (
    <Container>
      <Wrapper>
        
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
          
          <Center>
          
          <Title>Useful Links</Title>
          
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
          
          </Center>
          
          <Right>
            <Title>Contact</Title>
            <ContactInfo>
              <Icon>
              <ContactPhoneOutlinedIcon></ContactPhoneOutlinedIcon>
              <Phone>0612665680</Phone>
              </Icon>
              <Icon>
                <EmailOutlinedIcon></EmailOutlinedIcon>
                <Email>dzenankrlic@gmail.com</Email>
              </Icon>

              

            </ContactInfo>
          </Right>
      </Wrapper>
    </Container>
  )
}

export default Footer