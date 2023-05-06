import {
  Box,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";
import Products from "./Components/Products";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [params, setParams] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getData(params);
  }, [params]);

  async function getData(val) {
    try {
      setLoading(true);
      let res = await axios.get(`http://localhost:4758/ads?query=${val}`);
      setData(res.data.data);
      setMessage(res.data.message);
      setLoading(false);
      setError(false);
    } catch (e) {
      setError(true);
      setErrorMessage(e.message);
    }
  }

  const handelChange = (e) => {
    setParams(e.target.value);
    console.log("e.target.value:", e.target.value);
  };
  return (
    <div className="App">
      <Box maxW="1349px" m="auto" mt="50px" bg="purple.300" p="15px">
        <Input
          bg="#fff"
          maxW="1200px"
          m="auto"
          color="royalblue"
          borderRadius="0px"
          placeholder="Search company name, primary text, headline, and description (i.e. sales,worlds) Like this"
          value={params}
          onChange={handelChange}
        />
      </Box>
      {loading ? (
        <Box maxW="1349px" m="auto" mt="150px">
          <Spinner size="xl" />
        </Box>
      ) : (
        <SimpleGrid
          maxW="1200px"
          m="auto"
          columns={{ base: 1, sm: 2, md: 3 }}
          gap="10px"
          mt="20px"
          bg="green.200"
          p="15px"
          borderRadius="20px"
        >
          {data &&
            data.map((item, index) => <Products key={index} item={item} />)}
        </SimpleGrid>
      )}
    </div>
  );
}

export default App;
