'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderArrow from '@/components/Elements/Carousel/SliderArrow';

interface childrenProps {
    children: React.ReactNode
}
const SliderProductCardSettings: React.FC<childrenProps> = ({ children }) => {
    const settings = {
        infinite: true,
        slidesToShow: 3, // Jumlah tampilan produk dalam satu slide
        slidesToScroll: 1,
        prevArrow: <SliderArrow direction="left" onClick={function (): void {
            throw new Error('Function not implemented.');
        }} />,
        nextArrow: <SliderArrow direction="right" onClick={function (): void {
            throw new Error('Function not implemented.');
        }} />,
    };
    return (
        <Slider {...settings}>{children}</Slider>
    )
}

export default SliderProductCardSettings