import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Apply from "./pages/Apply";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/signup/Signup";
import Welcome from "./components/Welcome/Welcome";
function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="search" element={<Search />} />
            <Route path="apply" element={<Apply />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
