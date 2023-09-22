import React from "react";
import Navbar from "../Layouts/navbar/Navbar";
import Carousel from "../Layouts/CarouselHomepage/Carousel";

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
      <section className="mt-2 relative">

      </section>
    </main>
  );
};

export default HomePage;
