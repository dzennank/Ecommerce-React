import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Info = styled.div`

`
const Icon = styled.div`

`
const Circle = styled.div`
`

const Product = ({ item }) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img}></Image>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            </Icon>
            <Icon>
                <SearchOutlinedIcon></SearchOutlinedIcon>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product