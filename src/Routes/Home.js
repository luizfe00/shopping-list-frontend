import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Jumbotron as Jumbo, Button } from 'reactstrap'
import styled from 'styled-components'
import CheckList from '../assets/CheckList.jpg'


const Background = styled.div`
    z-index: -1;

    height: 100%;
    

`
const ImageBackground = styled.div`
    background: url(${CheckList})no-repeat center center fixed;
    position: absolute;
    background-color: black;
    background-size: cover;
    opacity: 1;
    width: 100%;
    height: 100%;
    z-index: -2;
`

export const Home = () => (
    <Background>
        <ImageBackground />
            <Container>
                <div className="overlay" />
                <h1 >Bem vindo</h1>        
            </Container>
        
        <h1 className="welcome">Faça Login para vizualizar e/ou alterar a lista </h1>
        <Link to="/login">
                <Button color="primary">Entrar</Button>
            </Link>
            <Link to="/register">
                <Button color="secundary">Registrar</Button>
            </Link>
    </Background>
)