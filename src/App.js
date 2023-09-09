import logo from "./logo.svg";
import { theme } from "./utility/theme/theme";
import { LandingPage, Shop, Details } from "./pages";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"shop"} element={<Shop />} />
        <Route path={":itemId"} element={<Details />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
