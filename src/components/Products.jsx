import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../data';
import { Link } from 'react-router-dom';
// 12345
const Container = styled.div`
     padding: 21px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
`
const Products = () => {
  const price = popularProducts.sort((a, b) => a.price - b.price)
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

export default Products