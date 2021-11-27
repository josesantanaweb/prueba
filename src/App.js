import React, {useState} from "react";
import Form from "./components/Form";
import Lists from "./components/Lists";
import Slider from "./components/Slider";
import ApiServices from './services/ApiServices';
import {Container} from "./styles/styled";

const App = () => {
  const [search, setSearch] = useState(true);
  const [loading, setLoading] = useState(true);
  const [document, setDocument] = useState("");
  const [data, setData] = useState({})

  const submit = () => {
    ApiServices.getDocument({ document, "projectId": 29 })
    .then((response) => {
      setData(response.data.data.bills)
      setLoading(false)
      setSearch(false)
    })
    .catch((err) => {});
  }
  return (
    <Container>
      <Slider/>
      {
        search 
        ? <Form onClick={submit} setDocument={setDocument}/> 
        : <Lists onClick={() => setSearch(true)} data={data} loading={loading}/>
      }
    </Container>
  );
}

export default App;
