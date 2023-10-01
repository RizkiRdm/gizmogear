'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../Layouts/navbar/Navbar";
import Carousel from "../Layouts/CarouselHomepage/Carousel";
import ProductCards from "../Layouts/ProductCard/ProductCards";
import image1 from '../../../public/wallhaven-gp26od.jpg';
import SliderProductCardSettings from "../Fragments/Carousel/SliderProductCardSettings";
import Footer from "../Layouts/Footer/Footer";

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
        {
          id: 2,
          category: 'console',
          title: 'Product 3',
          price: 10,
          imageSrc: image1,
          linkProduct: 'product1'
        },
        {
          id: 2,
          category: 'console',
          title: 'Product 4',
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
        <section className="mt-5 relative">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold ml-5 my-4">
              Produk yang baru dirilis
            </h2>
            <SliderProductCardSettings>
              {products.map((product) => (
                <div key={product.id} >
                  <ProductCards product={product} />
                </div>
              ))}
            </SliderProductCardSettings>
          </div>
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default HomePage;
