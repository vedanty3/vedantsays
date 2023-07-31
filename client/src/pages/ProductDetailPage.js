import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";

function Home() {
  return (
    <div>
      <NavBar>
        <ProductDetail />
      </NavBar>
    </div>
  );
}

export default Home;
