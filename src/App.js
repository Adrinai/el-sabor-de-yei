import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import QuienesSomos from "./components/QuienesSomos";
import Productos from "./components/Productos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
