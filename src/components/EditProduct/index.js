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
  MenuItem,
  Paper,
  TextField,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  allProduct,
  createProduct,
  productDetail,
  updateProduct,
} from "../../actions/productActions";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const style = {
  position: "absolute",
  // top: "50%",
  // left: "50%",
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

export const EditProduct = (props) => {
  //console.log(props.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, setCategory] = React.useState("");
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [inStock, setInStock] = React.useState("");
  const { productId } = useParams();
  const product = props.product;

  React.useEffect(() => {
    if (product !== null) {
      setName(product.name);
      setPrice(product.price);
      setQuantity(product.quantity);
      setDescription(product.description);
      setCategory(product.category);
      setInStock(product.inStock);
    }
  }, [product]);

  const updatedProduct = {
    _id: productId,
    name,
    category,
    price,
    quantity,
    description,
    inStock,
  };

  const saveProduct = (e) => {
    e.preventDefault();
    if (!name || !price || !category || !quantity || !description) {
      alert("Please fill all fields");
    } else {
      dispatch(updateProduct(updatedProduct));
      navigate("/products");
      // props.onClose();
      window.location.reload();
    }
  };
  const deleteProduct = (e) => {};
  console.log("Open EDITS");

  return (
    <Container
      maxWidth="100%"
      sx={{
        overflow: "hidden",
        borderRadius: "10px",
        backgroundColor: "whitesmoke",
      }}
    >
      <Box mt={5} mb={5} ml={3} mr={3}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              id="outlined-info"
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              color="info"
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              fullWidth
              value={quantity}
              color="info"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency"
              select
              label="Select Category"
              fullWidth
              value={category}
              color="info"
              onChange={(e) => setCategory(e.target.value)}
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
              value={price}
              color="info"
              onChange={(e) => setPrice(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControlLabel
              sx={{ color: "Black" }}
              control={
                <Checkbox
                  onChange={(e) => setInStock(e.target.checked)}
                  checked={inStock}
                />
              }
              label="Item in Stock"
            />
          </Grid>

          <Grid item xs={2}>
            <Button variant="contained" onClick={() => navigate("/products")}>
              Discard
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={deleteProduct}
              color="error"
            >
              Delete
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={saveProduct}
              color="success"
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
