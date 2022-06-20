import { Add, PriceChange, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { addProductAmount, removeProductAmount } from '../redux/cartRedux';



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
  flex-direction: column;
  
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
const PrizeDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProdcutAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
`
const ProductPrize = styled.span`
  font-size: 30px;
  font-weight: 200;
`


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const product = useSelector(state => state.cart.products)
  const dispatch = useDispatch();
 
  const price = product.map((i) => (
      i.price * i.productAmount
  ))

  const totalPrice = price.reduce((a, b) => a+b, 0);
 
 
  const handleAmount = (item) => {
    dispatch(addProductAmount(item))
  }

  const removeAmount = (item) => {
    if(item.productAmount > 0) {
      dispatch(removeProductAmount(item))
    }
    
  }

  
  
  
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
            
              
              {product.map((item) => (
                <Product>
                <ProductDetail>
                <Image src={item.img}/>
                <Details>
                
                  <ProductName>
                    <b>PRODUCT:</b> JESSIE THUNDER SHOES <br />
                  </ProductName>
                  <ProductId>
                    <b>ID: {item.id} </b>
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
                </ProductDetail>
                <PrizeDetail>
                <ProdcutAmountContainer>
                  <Add onClick={() => handleAmount(item)}/>
                  <ProductAmount>{item.productAmount || 0}</ProductAmount>
                  <Remove onClick={() => removeAmount(item)}/>
                </ProdcutAmountContainer>
                <ProductPrize>{item.price * item.productAmount}$</ProductPrize>
              </PrizeDetail>
            </Product>
              ))}
              
                
                {/* <Details>
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
                </Details> */}
              
              
          </Info>
          <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                {totalPrice}
              </SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart