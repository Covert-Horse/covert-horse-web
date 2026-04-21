import { useEffect, useState } from "react";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  ratings: any[]; // backend sends ratings array
};

const emptyProducts: Product[] = [];

function Products() {
  const [products, setProducts] = useState<Product[]>(emptyProducts);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:5187/catalog", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="content">
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              
              {/* Image (static for now since backend doesn’t send one) */}
              <img
                className="product-image"
                src="/images/d1.jpg"
                alt="product"
              />

              <div className="product-name">
                <a href="product.html">{product.name}</a>
              </div>

              <div className="product-brand">{product.brand}</div>

              <div className="product-price">{product.price}</div>

              <div className="product-rating">
                {product.ratings && product.ratings.length > 0
                  ? `${product.ratings.length} review(s)`
                  : "No reviews yet"}
              </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;