import React from "react";
import bg from "../../assets/img/bg.png";
import dataImg from "../../assets/img/data-img.png";
import { 
  Container,
  Background,
  ContainerInner,
  DataImg,
  Title,
  Text,
  Dots,
  Dot
} from "./styled";

const Slider = () => {
  return (
    <Container>
      <Background alt="bg" src={bg} />
      <ContainerInner>
        <DataImg alt="bg" src={dataImg} />
        <Title>Los pagos son procesados de forma segura por ePayco</Title>
        <Text>Phasellus dui lorem, eleifend convallis malesuada at, vestibulum.</Text>
        <Dots>
          <Dot/>
          <Dot active/>
          <Dot/>
        </Dots>
      </ContainerInner>
    </Container>
  )
}

export default Slider;
