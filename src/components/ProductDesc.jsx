import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../data';
import { Link } from 'react-router-dom';

const Container = styled.div`
     padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
`

export const ProductDesc = () => {
    
    const price = popularProducts.sort((a, b) => b.price - a.price)
    console.log(price)
  return (

    <Container>
       {price.map((item) => (
          <Link to={`/product/${item.id}`}
            state={{
              item
            }}>
            <Product item = {item} key = {item.id}/>
            </Link>
        ))}
    </Container>
  )
}
