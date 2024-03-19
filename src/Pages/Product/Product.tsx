import "./product.scss";
import Single from "../Single/Single";
import { singleProduct } from "../../data";
function Product() {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
}

export default Product;
