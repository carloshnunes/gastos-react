import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

function Tabela({ gastos }) {
  const parcelados = gastos.filter((gasto) => gasto.tipo === 'parcelado');
  const continuos = gastos.filter((gasto) => gasto.tipo === 'contínuo');

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Gastos Parcelados
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Descrição</TableCell>
              <TableCell>Valor Total</TableCell>
              <TableCell>Parcelas</TableCell>
              <TableCell>Para quem pagar</TableCell>
              <TableCell>Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parcelados.map((gasto, index) => (
              <TableRow key={index}>
                <TableCell>{gasto.descricao}</TableCell>
                <TableCell>
                  R$ {(gasto.valor * gasto.parcelas).toFixed(2)}
                </TableCell>
                <TableCell>{gasto.parcelas}</TableCell>
                <TableCell>{gasto.pagarPara}</TableCell>
                <TableCell>{gasto.categoria}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" gutterBottom>
        Gastos Contínuos
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Descrição</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Para quem pagar</TableCell>
              <TableCell>Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {continuos.map((gasto, index) => (
              <TableRow key={index}>
                <TableCell>{gasto.descricao}</TableCell>
                <TableCell>R$ {gasto.valor.toFixed(2)}</TableCell>
                <TableCell>{gasto.pagarPara}</TableCell>
                <TableCell>{gasto.categoria}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tabela;
