import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import SuccessLogin from './SuccessLogin';

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

const Button = styled.button`
    width: 80%;
    border: none;
    border-radius: 20%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-left: 20px;
    
`


const Login = () => {

const [loginEmail, setLoginEmail] = useState('')
const [loginPass, setLoginPass] = useState('')

// const [user, setUser] = useState({})

// onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser)
// })

const login = async() => {

    try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass);
        console.log(user)
    }

    catch(error){
        console.log(error.massage);
    }

}

  return (
    <Container>
        <Wrapper>
            <Title>
              LOGIN
            </Title>
            <Form>
              <Input placeholder = "Email" onChange={(e) => {setLoginEmail(e.target.value)}}/>
              <Input placeholder = "Password" onChange={(e) => {setLoginPass(e.target.value)}}/>
              <h3>Don't have an acc, please register <Link to="/register">here</Link></h3>
              {/* {user ? 
              <p>
              you are logged in as {user.email}, 
              <Link
              to="/">
              Continue
              </Link>
              </p> 
              : <p>????????</p>} */}
            </Form>
            
              
            <Button onClick={login}>LOGIN</Button>
            
        </Wrapper>
    </Container>
  )
}

export default Login