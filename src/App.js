
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import QuienesSomos from "./components/Inicio/QuienesSomos";
import Productos from "./components/Inicio/Productos";
import Cursos from "./components/Inicio/Cursos";
import Contacto from "./components/Inicio/Contacto";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
