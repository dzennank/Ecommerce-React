import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    `
    const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    
    `
    const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-left: 130px;
    
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`
const Button = styled.button`
    width: 80%;
    border: none;
    border-radius: 20%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-left: 60px;
    margin-top: 20px;
    
`


const SuccessLogin = () => {
  return (
    <Container>
    <Wrapper>
        
        <Form>
            <Title>
            You are successfuly logged in
            </Title>
            <Link to="/"><Button>Continue</Button></Link>
        </Form>
        
    </Wrapper>
</Container>
  )
}

export default SuccessLogin