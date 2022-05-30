import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
height: 30px;
  background-color: #5F9EA0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;

`

const Announcement = () => {

   

  return (
    <Container>
        <div>Seuper Deal!! Free Shipping on Orders Over 50$</div>
    </Container>
  )
}

export default Announcement