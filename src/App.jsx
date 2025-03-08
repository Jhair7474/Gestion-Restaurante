import Rutas from "./components/routes/Rutas";
import Footer from "./components/footer/Footer";
import Navegador from "./components/navegador/Navegador";
import UsersContext from "./context/UsersContext";
import ReservaContext from "./context/ReserveContext";
import React, { useState } from 'react';
import ChangeBgButton from './components/ChangeBgButton';  // Importa el componente

function App() {
  const [bgColor, setBgColor] = useState("white");  // Estado para el color de fondo

  return (
    <UsersContext>
      <ReservaContext>
        <div style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "10px" }}>
          <Navegador />
          <Rutas />
          <ChangeBgButton setBgColor={setBgColor} />  {/* Botón para cambiar el fondo */}
          <Footer />
        </div>
      </ReservaContext>
    </UsersContext>
  );
}

export default App;
