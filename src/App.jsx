import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";

import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
