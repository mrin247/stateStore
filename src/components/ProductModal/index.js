import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  ButtonGroup,
  Checkbox,
  Container,
  Fade,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  color: "black",
  boxShadow: 24,
  p: 4,
  borderRadius:"10px"
};

const Input = styled("input")({
  display: "none",
});

const categories = [
  {
    value: "Food",
    label: "Food",
  },
  {
    value: "Food 1",
    label: "Food 1",
  },
  {
    value: "Food 2",
    label: "Food 2",
  },
  {
    value: "Food 3",
    label: "Food 3",
  },
];

export const ProductModal = (props) => {
  const [category, setCategory] = React.useState("Food");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select Category"
                  onChange={handleChange}
                  fullWidth
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={8}>
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button
                    variant="contained"
                    component="span"
                    endIcon={<PhotoCamera />}
                    fullWidth
                    sx={{ height: "100%" }}
                  >
                    Upload
                  </Button>
                </label>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  //defaultValue="Default Value"
                />
              </Grid>
              <Grid item xs={6} >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Item in Stock"
                />
              </Grid>

              <Grid item xs={3}>
                
                  <Button variant="contained">Contained</Button>
                  
                
              </Grid>
              <Grid item xs={3} >
                
                  <Button variant="contained" fullWidth>Contained</Button>
                  
                
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
