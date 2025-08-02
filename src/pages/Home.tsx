import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="pt-24 px-4 sm:px-8 max-w-6xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold">Welcome to the Theme Switcher App</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Choose from 3 unique themes. Explore products below!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-xl shadow hover:shadow-2xl border transition-all"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-1 line-clamp-1">
              {product.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">
              {product.description}
            </p>
            <p className="font-bold text-blue-600 dark:text-blue-400 text-lg">
              ${product.price}
            </p>
            <div className="flex items-center text-sm text-yellow-500 mt-1">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </div>
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
