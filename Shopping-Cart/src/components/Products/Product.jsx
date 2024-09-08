import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(`Error fetching products`, error);
      }
    };
    fetchProducts();
  }, []);
  const handleAddCart = (product) => {
    dispatch(
      addItem({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  };
  return (
    <>
      <section className="products py">
        {products.map((product) => (
          <div className="product-box" key={product.id}>
            <div className="product-price">
              <h1>{product.price} EGP</h1>
            </div>
            <img src={product.image} alt={product.title} className="img" />
            <div className="buy-box">
              <div>
                <h1>{product.title}</h1>
              </div>
              <div className="add">
                <button onClick={() => handleAddCart(product)}>
                  ADD <LuPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Product;
