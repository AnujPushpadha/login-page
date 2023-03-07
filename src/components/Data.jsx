// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";

// export default function Data(props) {
//   // console.log(props.array);
//   const handleProductEditOpen = (data, i) => {
//     props.EditOpen(data, i);
//   };
//   const deleteProduct = (i) => {
//     props.handleDelete(i);
//   };
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="center">Name</TableCell>

//             <TableCell align="center">Description</TableCell>
//             <TableCell align="center">Image</TableCell>
//             <TableCell align="center">Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {props.array.map((row, i) => (
//             <TableRow
//               key={i}
//               // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="center">{row.desc}</TableCell>
//               <TableCell align="center"></TableCell>
//               <TableCell align="center">
//                 <Button
//                   className="button_style"
//                   variant="outlined"
//                   color="primary"
//                   size="small"
//                   onClick={(e) => handleProductEditOpen(row, i)}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   className="button_style"
//                   variant="outlined"
//                   color="secondary"
//                   size="small"
//                   onClick={(e) => deleteProduct(i)}
//                 >
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
