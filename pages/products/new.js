import Layout from "@/components/Layout";
import { useState } from "react";

function NewProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <Layout>
      <h1>New Product</h1>
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
    </Layout>
  );
}

export default NewProduct;
