import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Tabelas from './components/Tabelas';

function App() {
  const [gastos, setGastos] = useState([]);

  const handleGastoRegistrado = (gasto) => {
    setGastos((prevGastos) => [...prevGastos, gasto]);
  };

  return (
    <div>
      <h1>Controle de Gastos</h1>
      <Formulario onGastoRegistrado={handleGastoRegistrado} />
      <Tabelas gastos={gastos} />
    </div>
  );
}

export default App;
