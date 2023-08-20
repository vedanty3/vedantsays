import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const saveProduct = async (e) => {
    e.preventDefault();
    const data = { price, title, description };
    if (_id) {
      await axios.put("/api/products", { ...data, _id });
    } else {
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  };

  if (goToProducts) {
    router.push("/products");
  }

  return (
    <form onSubmit={saveProduct}>
      <label>Product name</label>
      <input
        value={title}
        onChange={handleTitleChange}
        type="text"
        placeholder="product name"
      />
      <label>Description</label>
      <textarea
        onChange={handleDescriptionChange}
        value={description}
        placeholder="description"
      />
      <label>Price (in USD)</label>
      <input
        value={price}
        onChange={handlePriceChange}
        type="number"
        placeholder="price"
      />
      <button className="btn-primary">Save</button>
    </form>
  );
}

export default ProductForm;
