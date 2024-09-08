import { CiShoppingCart } from "react-icons/ci";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { selectTotalItemsCount } from "../../features/cart/cartSlice";

function Navbar() {
  const cartCount = useSelector(selectTotalItemsCount);
  return (
    <>
      <nav className="py">
        <div className="logo">
          <h1>SHOP</h1>
        </div>
        <div className="cart">
          <p className="cart-count">{cartCount}</p>
          <CiShoppingCart size={20} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
