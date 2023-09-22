'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerInfo from "@/components/Elements/Carousel/BannerInfo";

interface Movie {
  title: string
  description: string
  imageUrl: any
}

interface Sliderprops {
  movies: Movie[]
}

const SliderComponent: React.FC<Sliderprops> = ({ movies }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <Slider {...sliderSettings}>
      {movies.map((movie, index) => (
        <div key={index}>
          <BannerInfo title={movie.title} description={movie.description} imageUrl={movie.imageUrl} />
        </div>
      ))}
    </Slider>);
};

export default SliderComponent;
