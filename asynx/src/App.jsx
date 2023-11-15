import { useState } from "react";
import "./App.css";
// import Tablex from "./Tablex";
import { ChakraProvider } from "@chakra-ui/react";
import Categories from "./Categories";

function App() {
  return (
    <ChakraProvider>
      <>{/* <Tablex /> */}</>
      <Categories />
    </ChakraProvider>
  );
}

export default App;
