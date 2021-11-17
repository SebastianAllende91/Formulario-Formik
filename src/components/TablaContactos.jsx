import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TablaContactos = ({ data, deleteData, setDataToEdit }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Contacto</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Apellido</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Telefono</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((el) => (
              <StyledTableRow key={el.id} el={el}>
                <StyledTableCell component="th" scope="row">
                  {el.id}
                  <button onClick={() => deleteData(el.id)}>Eliminar</button>
                  <button onClick={() => setDataToEdit(el)}>Editar</button>
                </StyledTableCell>
                <StyledTableCell align="right">{el.nombre}</StyledTableCell>
                <StyledTableCell align="right">{el.apellido}</StyledTableCell>
                <StyledTableCell align="right">{el.email}</StyledTableCell>
                <StyledTableCell align="right">{el.telefono}</StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableCell component="th" scope="row">
              No hay datos
            </StyledTableCell>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaContactos;
