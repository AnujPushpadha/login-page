// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// const EditModal = (props) => {
//   return (
//     <div>
//       <Dialog open={props.openEdit} onClose={props.onCloseEdit}>
//         <DialogTitle>Edit Modal</DialogTitle>
//         <DialogContent>
//           <TextField
//             id="standard-basic"
//             type="text"
//             autoComplete="off"
//             name="name"
//             value={props.value.name}
//             onChange={props.onChangeEdit}
//             placeholder=" Name"
//             required
//           />
//           <br />
//           <TextField
//             id="standard-basic"
//             type="text"
//             autoComplete="off"
//             name="desc"
//             value={props.value.desc}
//             onChange={props.onChangeEdit}
//             placeholder="Description"
//             required
//           />

//           <br />
//           <br />
//           <Button variant="contained" component="label">
//             {" "}
//             Upload
//             <input
//               id="standard-basic"
//               type="file"
//               accept="image/*"
//               // inputProps={{
//               //   accept: "image/*"
//               // }}
//               name="file"
//               // value={this.state.file}
//               // onChange={this.onChange}
//               // id="fileInput"
//               placeholder="File"
//               hidden
//               required
//             />
//           </Button>
//           {/* &nbsp;
//           {this.state.fileName} */}
//         </DialogContent>
//         <DialogActions>
//           {/* <Button onClick={props.onClose}>Cancel</Button> */}
//           {/* <Button onClick={props.onClose}>Add Product</Button> */}
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default EditModal;
