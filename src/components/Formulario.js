import React, { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from '@mui/material';

function Formulario({ onGastoRegistrado, categorias }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [tipo, setTipo] = useState('parcelado');
  const [categoria, setCategoria] = useState('');
  const [pagarPara, setPagarPara] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !descricao ||
      !valor ||
      !categoria ||
      !pagarPara ||
      (tipo === 'parcelado' && !parcelas)
    ) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    const novoGasto = {
      descricao,
      valor: parseFloat(valor),
      parcelas: tipo === 'parcelado' ? parseInt(parcelas) : null,
      tipo,
      categoria,
      pagarPara,
    };

    onGastoRegistrado(novoGasto);
    setDescricao('');
    setValor('');
    setParcelas('');
    setTipo('parcelado');
    setCategoria('');
    setPagarPara('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <h3>Registrar Gasto</h3>
      <TextField
        label="Descrição do Gasto"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Valor"
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo</InputLabel>
        <Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <MenuItem value="parcelado">Parcelado</MenuItem>
          <MenuItem value="contínuo">Contínuo</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Parcelas"
        type="number"
        value={parcelas}
        onChange={(e) => setParcelas(e.target.value)}
        disabled={tipo === 'contínuo'}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Categoria</InputLabel>
        <Select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((cat, index) => (
            <MenuItem key={index} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Para quem pagar"
        value={pagarPara}
        onChange={(e) => setPagarPara(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Registrar
      </Button>
    </form>
  );
}

export default Formulario;
