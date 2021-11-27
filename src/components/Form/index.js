import React, {useState} from "react";
import logo from "../../assets/img/logo.png";
import { 
  Container,
  Welcome,
  Header,
  Wrapper,
  Logo,
  Title,
  Input,
  Text,
  Button,
} from "./styled";

const Form = ({onClick, setDocument}) => {

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo"/>
      </Header>
      <Welcome>
        <Wrapper>
          <Title>Bienvenido a ePayco</Title>
          <Text>Consulte sus facturas</Text>
          <Input placeholder="Número de identificación" onChange={(e) => setDocument(e.target.value)}/>
          <Button onClick={onClick}>Consultar</Button>
        </Wrapper>
      </Welcome>
    </Container>
  )
}

export default Form;
