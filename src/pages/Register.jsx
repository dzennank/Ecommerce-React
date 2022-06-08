import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    margin-right: 20px;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.div`
    font-size: 12px;
    
`
const Button = styled.button`
    width: 40%;
    border: none;
    border-radius: 20%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-left: 20px;
    
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="lastName" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confrimPassword" />
            </Form>
            <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
            <Button>CREATE</Button>
        </Wrapper>
    </Container>
  )
}

export default Register