import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

const Container = styled.div`
height: 80px;
background-color: lightgrey;

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-around;
`
const Left = styled.div`

flex: 1;
display: flex;
allign-items: center;
margin-top: 15px;
`
const Language = styled.div`
    font-size: 14px;
    pointer: cursor;
`

const SearchContainer = styled.div`

display: flex;
allign-items: center;
margin-top: -6px;
margin-left: 15px;
padding: 5px;

`

const Center = styled.div`
margin-top: 15px;
flex: 1;
text-allign: center;
`
const Right = styled.div`
margin-top: 15px;
flex: 1;
display: flex;
allign-items: center;
justify-content: space-around;
`
const Logo = styled.h1`
font-weight: bold;
margin-left: 55px;
`
const MenuItem = styled.div`
font-size: 20px;
cursor: pointer;
color: black;
textDecoration: 'none'

`

const Navbar = () => {
  return (
    <Container> 
        <Wrapper> 
            <Left> 
                <Language>EN</Language>
                <SearchContainer>
                <input type="text" />
                    <SearchIcon style={{color:"gray", fontSize: 30}}></SearchIcon>
                </SearchContainer>
            </Left> 
            <Center>
                <Logo>Logo</Logo>
            </Center>
            <Right>
                <Link to="/register" style={{ textDecoration: 'none' }}><MenuItem>REGISTER</MenuItem></Link>
                <Link to="/login" style={{ textDecoration: 'none' }}><MenuItem>SIGN IN</MenuItem></Link>
                <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon></ShoppingCartIcon>
                        </Badge>
                    </MenuItem>
                </Link>
                
            </Right>
            
        </Wrapper>
    </Container>
  )
}

export default Navbar