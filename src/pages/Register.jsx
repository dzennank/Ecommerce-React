import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
    font-size: 20px;
    font-weight: 100;
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



const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}



const Register = () => {

    // const validateEmail = () => {
        
    //     if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === true) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    //     const validatePass = () => {
    //         if(password >= 6) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    

    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")

    console.log(email)

    const registration = async () => {

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === true) {
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user)
            }
    
            catch(error){
                alert("Password must have a minimum 6 characters")
            }
        } else {
            alert("Your email or password is not valid!! Password must have a minimum 6 characters")
        }
        
        
       
    };

  return (
    <Container>
        <Wrapper>
            <Title>
                CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
                <Input placeholder="password" onChange={(e) => {setPass(e.target.value)}}/>
            </Form>
            <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
            <Button onClick={registration}>CREATE</Button>
        </Wrapper>
    </Container>
  )
}


export default Register