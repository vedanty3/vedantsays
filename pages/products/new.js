import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

function NewProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
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
  const createProduct = async (e) => {
    e.preventDefault();
    const data = { price, title, description };
    await axios.post("/api/products", data);
    setGoToProducts(true);
  };

  if (goToProducts) {
    router.push("/products");
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
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
      </form>
    </Layout>
  );
}

export default NewProduct;
