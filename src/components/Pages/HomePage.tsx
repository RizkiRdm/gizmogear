'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../Layouts/navbar/Navbar";
import Carousel from "../Layouts/CarouselHomepage/Carousel";
import ProductCards from "../Layouts/ProductCard/ProductCards";
import image1 from '../../../public/wallhaven-gp26od.jpg';

interface Product {
  id: number
  imageSrc: any
  title: string
  category: string
  linkProduct: string
  price: number
}

const HomePage: React.FC = ({ }) => {

  const [products, setProducts] = useState<Product[]>([])

  // simulasi fetching data
  useEffect(() => {
    const fetchingData = async () => {
      const data: Product[] = [
        {
          id: 1,
          category: 'console',
          title: 'Product 1',
          price: 100000,
          imageSrc: image1,
          linkProduct: 'product1'
        },
        {
          id: 2,
          category: 'console',
          title: 'Product 2',
          price: 10,
          imageSrc: image1,
          linkProduct: 'product1'
        },
      ]
      setProducts(data)
    }
    fetchingData()
  }, [])
  return (
    <>
      <main>
        {/* navbar */}
        <Navbar />

        {/* slider product */}
        <section className="mt-2 relative">
          <Carousel />
        </section>

        {/* slider product */}
        <section className="mt-5 relative grid grid-cols-3 gap-5">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCards product={product} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default HomePage;
