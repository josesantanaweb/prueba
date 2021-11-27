/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import ApiServices from '../../services/ApiServices';
import logo from "../../assets/img/logo.png";
import back from "../../assets/img/back.svg";
import loadingImg from "../../assets/img/loading.gif";
import { 
  Container,
  Welcome,
  Header,
  Wrapper,
  Logo,
  Top,
  BackIcon,
  Title,
  Table,
  TableHead,
  TableBody,
  Text,
  Button,
  Loading
} from "./styled";

const Lists = ({onClick, data, loading}) => {
  const [config, setConfig] = useState([])

  const sendConfig = () => {
    ApiServices.getConfig({ "projectId": 29 })
    .then((response) => {
      setConfig(response.data.data)
    })
    .catch(() => {});
  }
  
  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    sendConfig()
  }, [])
  
  const keysData = Object.keys(data[0]);

  const filterKeyData = keysData.find(element => element === 'document');

  const filterKey = config?.filter(item => item.key === filterKeyData);

  const label = filterKey[0]?.name;


  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo"/>
      </Header>
      <Welcome>
        <Wrapper>
            {
              loading 
              ? <Loading src={loadingImg}/>
              : 
              <>
                <Top>
                  <BackIcon src={back} alt="back" onClick={onClick}/>
                  <Title>Listado</Title>
                </Top>
                <Table>
                  <TableHead>
                    <Text>Valor</Text>
                    <Text>{label}</Text>
                    <Text>Fecha vencimiento</Text>
                  </TableHead>
                  <>
                    {
                      data.map((item) =>
                        <TableBody key={item.document}>
                          <Text primary>${item.amountFirst} COP</Text>
                          <Text primary>{item.document}</Text>
                          <Text primary>{item.billDate}</Text>
                          <Button>Pagar</Button>
                        </TableBody>
                      )
                    }
                  </>
                </Table>
              </>
            }
        </Wrapper>
      </Welcome>
    </Container>
  )
}

export default Lists;
