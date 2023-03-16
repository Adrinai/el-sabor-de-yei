
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import QuienesSomos from "./components/pages/QuienesSomos";
import Productos from "./components/pages/Productos";
import Cursos from "./components/pages/Cursos";
import Contacto from "./components/pages/Contacto";
import Sobrenosotros from "./components/pages/Sobrenosotros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Sobrenosotros" element={<Sobrenosotros/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
