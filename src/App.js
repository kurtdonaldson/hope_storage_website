import Home from "./pages/Home";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
