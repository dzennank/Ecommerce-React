import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1; 
    margin: 3px;
    height: 70vh;
    position: relative;

`
const Img = styled.img`
        height: 100%;
        width: 100%;
        object-fit: cover;

`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 20%;
`



const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Img src={item.img}/>
        <Info>
            <Title>
                {item.title}
            </Title>
        </Info>
        <Button>
            SHOP NOW
        </Button>
    </Container>
  )
}

export default CategoryItem