import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';

const Container = styled.div`
height: 60px;

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-around;
`
const Left = styled.div`
margin-top: 10px;
flex: 1;
display: flex;
allign-items: center;
`
const Language = styled.div`
    font-size: 14px;
    pointer: cursor;
`

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
allign-items: center;

`
const Center = styled.div`
margin-top: 10px;
flex: 1;
`
const Right = styled.div`
margin-top: 10px;
flex: 1;
`

const Navbar = () => {
  return (
    <Container> 
        <Wrapper> 
            <Left> 
                <Language>EN</Language>
                <SearchContainer>
                Input
                    <SearchIcon></SearchIcon>
                </SearchContainer>
            </Left> 
            <Center>Center</Center>
            <Right>Right</Right>
            
        </Wrapper>
    </Container>
  )
}

export default Navbar