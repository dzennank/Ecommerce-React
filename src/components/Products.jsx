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
const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
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