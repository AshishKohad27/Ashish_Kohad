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
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./Redux/data/data.action";

function App() {
  const [params, setParams] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error, errorMessage, message } = useSelector((store) => store.data);

  useEffect(() => {
    dispatch(getData(params));
  }, [params]);

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
