import styled from 'styled-components'
import React from 'react'

const Announcement = () => {

    const Container = styled.div`
    height: 30px;
    background-color: gray;
    `

  return (
    <Container>
        <div>Seuper Deal!! Free Shipping on Orders Over 50$</div>
    </Container>
  )
}

export default Announcement