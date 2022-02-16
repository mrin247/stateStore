import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { allProduct, createProduct } from "../../actions/productActions";
import { Navigate, useNavigate } from "react-router-dom";

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
  borderRadius: "10px",
};

const Input = styled("input")({
  display: "none",
});

const categories = [
  {
    value: "Home Needs",
    label: "Home Needs",
  },
  {
    value: "Grocery",
    label: "Grocery",
  },
  {
    label: "Fashion",
    value: "Fashion",
  },
  {
    value: "Books & Magazines",
    label: "Books & Magazines",
  },
  {
    value: "Handlooms",
    label: "Handlooms",
  },
  {
    value: "Lifestyle",
    label: "Lifestyle",
  },
  {
    value: "Puja Samagrhi",
    label: "Puja Samagrhi",
  },
  {
    value: "Toys & More",
    label: "Toys & More",
  },
];

export const ProductModal = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [category, setCategory] = React.useState("");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [inStock, setInStock] = React.useState(true);
  const [productPictures, setProductPictures] = React.useState([]);

  const saveProduct = (e) => {
    e.preventDefault();
    if (!name || !price || !category || !quantity || !description) {
      alert("Please fill all fields");
    } else {
      const form = new FormData();
      form.append("name", name);
      form.append("category", category);
      form.append("price", price);
      form.append("quantity", quantity);
      form.append("description", description);
      form.append("inStock", inStock);
      //form.append("name",name);
      //const product = { content: form };
      //console.log(form.values());

      for (let pic of productPictures) {
        form.append("productPhotos", pic);
      }

      console.log(productPictures);
      dispatch(createProduct(form)).then(() => props.onClose());
      setName("");
      setCategory("");
      setPrice("");
      setQuantity("");
      setDescription("");
      setInStock(true);
      setProductPictures([]);
      //;
      //window.location.reload();
    }
  };

  const discard = () => {
    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setDescription("");
    setInStock(true);
    setProductPictures([]);
    props.onClose();
  };

  const handleProductPictures = (e) => {
    setProductPictures([...productPictures, ...e.target.files]);
  };

  console.log(productPictures);
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
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select Category"
                  fullWidth
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={11}>
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={7} sx={{ display: "flex" }}>
                
                  {productPictures.map((image) => (
                    <Typography sx={{ fontSize: "10px" }}>
                      {image.name}
                    </Typography>
                  ))}
                
              </Grid> */}
              <Grid item xs={1}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      multiple
                      type="file"
                      onChange={handleProductPictures}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera sx={{ fontSize: "40px" }} />
                    </IconButton>
                  </label>
                </Box>
              </Grid>
              {productPictures.length > 0 ? (
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {productPictures.map((image) => (
                      <Grid item xs={2}>
                        <Button
                          variant="text"
                          size="small"
                          sx={{ textTransform: "none", color: "rgb(0 30 60)" }}
                        >
                          {image.name}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              ) : null}

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>

              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => setInStock(e.target.checked)}
                      checked={inStock}
                    />
                  }
                  label="Item in Stock"
                />
              </Grid>

              <Grid item xs={3}>
                <Button variant="contained" onClick={() => discard()}>
                  Discard
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" fullWidth onClick={saveProduct}>
                  Create
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
