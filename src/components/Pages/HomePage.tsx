import React from "react";
import Navbar from "../Layouts/navbar/Navbar";
import Carousel from "../Layouts/CarouselHomepage/Carousel";
import ProductCards from "../Layouts/ProductCard/ProductCards";

const HomePage = () => {
  return (
    <main>
      {/* navbar */}
      <Navbar />

      {/* slider product */}
      <section className="mt-2 relative">
        <Carousel />
      </section>

      {/* slider product */}
      <section className="mt-5 relative">
        <ProductCards />
      </section>
    </main>
  );
};

export default HomePage;
