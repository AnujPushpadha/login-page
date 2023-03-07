import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";
const Tablemui = () => {
  const Navigate = useNavigate();
  const handleProductEditOpen = (row, i) => {
    console.log("edit");
    Navigate("/dashbord/editpage");
  };
  return (
    <TableContainer component={Paper} sx={{ m: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>

            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Edit-Delete</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="center">{row.Category}</TableCell>
              <TableCell align="center">{row.Price}</TableCell>
              <TableCell align="center">{row.Quality}</TableCell>
              <TableCell align="center">
                <Button
                  className="button_style"
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={(e) => handleProductEditOpen(row, i)}
                >
                  Edit
                </Button>
                <Button
                  className="button_style"
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={(e) => deleteProduct(i)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tablemui;
