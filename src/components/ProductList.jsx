import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/productService";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  return (
    <section className="py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

// import ProductCard from './ProductCard.jsx'
// import { products } from '../data/products.js'

// const ProductList = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {products.slice(0, 6).map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   )
// }

// export default ProductList


