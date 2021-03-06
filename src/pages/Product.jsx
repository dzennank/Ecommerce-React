import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { addProduct, addProductAmount } from '../redux/cartRedux';





const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
 flex: 1;
 margin-left: 20px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`
const AmountContainer = styled.div`
    display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.p`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`


const Product = () => {


  const dispatch = useDispatch()
  const location = useLocation()
  // const amount = useSelector(state => state.products.find())

  const handleClick = () => {
    dispatch(addProduct(location.state.item))
  
  }
// const handleAmount = () => {
//   dispatch(addProductAmount(location.state.item))
// }
  

  return (
    <Container> 
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
            
              <Image src={location.state.item.img}></Image>
            
                
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</Desc>
            <Price>{location.state.item.price * (location.state.item.productAmount || 1)}$</Price>
            <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

            <AddContainer>
                <AmountContainer>
                    <Remove />
                    <Amount>{location.state.item.productAmount}</Amount>
                    {/* <Add onClick={handleAmount}/> */}
                </AmountContainer>
                <Button onClick={() => handleClick(location.state.item)}>ADD to Cart</Button>
            </AddContainer>

            </InfoContainer>
        </Wrapper>
        {/* <Newsletter /> */}
        <Footer />

    </Container> 
  )
}

export default Product