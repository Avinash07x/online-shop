import Left from "./Left";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddProductadmin = () => {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState();
  const [isSize, setIssize] = useState([]);
  const [isBestseller, setIsbestseller] = useState(false);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  function handleChange(e) {
    let value = e.target.value;
    let checked = e.target.checked;

    if (checked) {
      setIssize([...isSize, value]);
    } else {
      setIssize(isSize.filter((item) => item !== value));
    }
  }

  function handleForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Title", productName);
    formData.append("Desc", productDesc);
    formData.append("Price", productPrice);
    formData.append("Rating", productRating);
    isSize.forEach((value) => {
      formData.append("Size", value);
    });
    formData.append("BestSeller", JSON.stringify(isBestseller));
    formData.append("PStatus", "In-Stock"); // default
    formData.append("Category", category);
    formData.append("image", image);

    fetch("/api/adminproductdata", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Successfully Insert Product 😍") {
          navigate("/adminproduct");
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      });
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 w-auto mt-5">
        <Left />
        <div className="w-11/12 ">
          <h1 className=" text-center text-4xl font-bold text-sky-600 my-4">
            Add Products ✔️
          </h1>
          <form onSubmit={handleForm} encType="multipart/form-data">
            <TextField
              fullWidth
              required
              label="ProductName"
              sx={{ marginBottom: "10px" }}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <TextField
              fullWidth
              required
              label="ProductDescription"
              multiline
              rows={4}
              sx={{ marginBottom: "10px" }}
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
            />

            <FormControl fullWidth sx={{ marginBottom: "10px" }}>
              <InputLabel>Amount</InputLabel>
              <OutlinedInput
                startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                label="Amount"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </FormControl>

            <TextField
              fullWidth
              label="Rating"
              sx={{ marginBottom: "10px" }}
              value={productRating}
              onChange={(e) => setProductRating(e.target.value)}
            />

            <label>Product Image</label>
            <input
              type="file"
              name="image"
              className="w-full my-4"
              onChange={(e) => setImage(e.target.files[0])}
            />

            {/* Category */}
            <select
              required
              className="w-full border mb-4 border-black rounded-sm p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">--Select Category--</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>

            {/* Size Options */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <FormControlLabel
                    key={size}
                    control={<Checkbox />}
                    label={size}
                    value={size}
                    onChange={handleChange}
                  />
                ))}
              </FormGroup>
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite color="error" />}
                  checked={isBestseller}
                  onChange={(e) => setIsbestseller(e.target.checked)}
                />
              }
              label="BestSeller"
            />

            <Button type="submit" variant="outlined" color="error">
              Add Product
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductadmin;
