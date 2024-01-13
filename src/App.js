import { theme } from "./utility/theme/theme";
import { Landing, Shop, Detail } from "./pages";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"shop"} element={<Shop />} />
        <Route path={":itemId"} element={<Detail />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
