import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductItem = (product) => {
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <img src={product.img} alt={product.title} />
      <h3 className="product-item-title">{product.title}</h3>
      <p className="product-item-description">{product.description}</p>
      <button
        className="btn"
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;

// const addtoCart = (product) => {
//   let cart = localStorage.getItem("products");
//   if (cart) {
//     let parsedCart = JSON.parse(cart);
//     if (!parsedCart.hasOwnProperty(product.title)) {
//       let newObj = {
//         ...parsedCart,
//         [product.title]: product,
//       };
//       localStorage.setItem("products", JSON.stringify(newObj));
//     } else {
//       parsedCart[product.title].amount += 1;
//       localStorage.setItem("products", JSON.stringify(parsedCart));
//     }
//   } else {
//     localStorage.setItem(
//       "products",
//       JSON.stringify({ [product.title]: product })
//     );
//   }
// };
