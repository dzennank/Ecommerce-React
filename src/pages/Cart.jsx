import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const Bottom = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`

const TopButton = styled.button`
   padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
  text-decoration: underline;
  cursor: pointer;
`
const TopText = styled.span`

`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  
`

const Image = styled.img`
  width: 300px;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
`

const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductSize = styled.span`

`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color}
`

const Summary = styled.div`
flex: 1;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                <Details>
                  <ProductName>
                    <b>PRODUCT:</b> JESSIE THUNDER SHOES <br />
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>9887655567
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart