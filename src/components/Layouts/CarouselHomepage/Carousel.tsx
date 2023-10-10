import React from "react";
import SliderComponent from "@/components/Fragments/Carousel/SliderSettings";
import image1 from '../../../../public/wallhaven-gp26od.jpg'
const Carousel = () => {

  const movies = [
    {
      _id: 1,
      title: 'Movie 1',
      description: 'This is a great movie!',
      imageUrl: image1,
    },
    {
      _id: 2,
      title: 'Movie 1',
      description: 'This is a great movie!',
      imageUrl: image1,
    }
  ]

  return <div className="relative overflow-hidden w-full h-screen rounded-sm">
    <SliderComponent movies={movies} />
  </div>;
};

export default Carousel;