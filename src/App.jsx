import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";

import Header from "../src/components/header/Header";
import Home from "./pages/Home/Home";
import Required from "./auth/required";
function App() {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Required>
                <Home />
              </Required>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
