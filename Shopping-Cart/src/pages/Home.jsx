import Product from "../components/Products/Product";
import Cart from "../features/cart/Cart";
import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <Product />
      <hr className="hr" />
      <Cart />
    </div>
  );
}

export default Home;
