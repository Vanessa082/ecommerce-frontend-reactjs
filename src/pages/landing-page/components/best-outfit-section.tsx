import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../constants/constants";
import { FaStar } from "react-icons/fa";
import SeeMoreBtn from "./atoms/see-more-btn";

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function BestOutfitSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loadMoreCount, setLoadMoreCount] = useState(4);

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        const womensClothing = data.filter(
          (product: { category: string }) =>
            product.category === "women's clothing" ||
            product.category === "men's clothing"
        );
        console.log(womensClothing);
        setProducts(womensClothing);
        setVisibleProducts(womensClothing.slice(0, loadMoreCount));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [loadMoreCount]);

  const loadMoreProducts = () => {
    const newCount = loadMoreCount + 4;
    setLoadMoreCount(newCount);
    setVisibleProducts(products.slice(0, newCount));
  };
  return (
    <section className="w-app-w mx-auto flex flex-col gap-6 py-8 ">
      <h1 className="uppercase text-accent text-3xl md:text-6xl md-lg:text-4xl font-playfair font-bold">
        Best outfit for your happiness{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div
            key={product.title}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-app-grey-400 text-sm font-lato">
                {product.category}
              </p>
              <h3 className="font-semibold text-lg font-playfair text-xl">
                {product.title}
              </h3>
              <p className="text-app-grey-900 font-bold">${product.price}</p>
              <button className="text-white font-bold font-lato bg-primary rounded-full p-1 px-3 flex justify-between items-center gap-2 absolute top-2 right-2 ">
                <FaStar className="text-yellow-400" />
                {product.rating?.rate || 4.5}{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
      <SeeMoreBtn loadMoreProducts={loadMoreProducts} />
    </section>
  );
}
