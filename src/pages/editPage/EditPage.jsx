import React from "react";
import "./Style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

const EditPage = () => {
  const EditData = () => {};
  return (
    <div>
      <div className="App">
        <div className="AppEdit">
          <Box height={60} />
          <Box sx={{ alignItems: "center" }}>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardContent>
                  <TextField
                    id="standard-basic"
                    type="text"
                    autoComplete="off"
                    name="Name"
                    //   value={props.value.name}
                    //   onChange={props.onChangeEdit}
                    placeholder=" Name"
                    required
                  />
                  <br />
                  <br />
                  <TextField
                    id="standard-basic"
                    type="text"
                    autoComplete="off"
                    name="Category"
                    //   value={props.value.name}
                    //   onChange={props.onChangeEdit}
                    placeholder="Category"
                    required
                  />
                  <br />
                  <br />
                  <TextField
                    id="standard-basic"
                    type="text"
                    autoComplete="off"
                    name="Price"
                    //   value={props.value.name}
                    //   onChange={props.onChangeEdit}
                    placeholder="Price"
                    required
                  />
                  <br />
                  <br />
                  <TextField
                    id="standard-basic"
                    type="text"
                    autoComplete="off"
                    name="Quality"
                    //   value={props.value.name}
                    //   onChange={props.onChangeEdit}
                    placeholder="Quality"
                    required
                  />
                  <br />
                  <br />
                  <Button variant="contained" color="success">
                    Edit
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
