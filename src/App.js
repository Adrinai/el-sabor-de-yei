
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Formulario from "./components/Formulario";
import Inicio from "./components/Inicio/Inicio";
import QuienesSomos from "./components/QuienesSomos";
import Productos from "./components/Productos";
import Cursos from "./components/Cursos";
import Contacto from "./components/Contacto";


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
