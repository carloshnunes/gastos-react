import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';

function App() {
  const [gastos, setGastos] = useState([]);
  const categorias = [
    'Alimentação',
    'Transporte',
    'Lazer',
    'Saúde',
    'Roupas',
    'Estudo',
    'Jogos',
  ];

  const handleGastoRegistrado = (novoGasto) => {
    setGastos((prevGastos) => [...prevGastos, novoGasto]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Controle de Gastos</h1>
      <Formulario
        onGastoRegistrado={handleGastoRegistrado}
        categorias={categorias}
      />
      <Tabela gastos={gastos} />
    </div>
  );
}

export default App;
