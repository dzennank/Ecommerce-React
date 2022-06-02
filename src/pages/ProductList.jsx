import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'

const Container = styled.div`

`
const Title = styled.h1`

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>Filter 1</Filter>
            <Filter>Filter 2</Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList