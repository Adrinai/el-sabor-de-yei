import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import QuienesSomos from "./components/QuienesSomos";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
