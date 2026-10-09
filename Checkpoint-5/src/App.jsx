import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./Home";
import Details from "./details";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;