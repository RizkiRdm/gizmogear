import CarouselHero from './CarouselHero'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

// setting carousel
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};


const items = [
    {
        slug: "product-1",
        title: "Product 1",
        src: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        ,
        description: "Product top number one and the best in the world and best on japan country and have oscar award from new york USA",
    },
    {
        slug: "product-2",
        title: "Product 2",
        src: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        ,
        description: "Product top number one",
    },
]

const carousel: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [slides, setSlides] = useState<Slider | null>(null)
    return (
        <>
            <Box position={"relative"}>
                <Slider {...settings} ref={(slides => setSlides(slides))}>
                    {items.map((product, index) => (
                        <CarouselHero
                            key={index}
                            title={product.title}
                            slug={product.slug}
                            description={product.description}
                            src={product.src}
                        />
                    ))}
                </Slider>

                <Flex
                    position="absolute"
                    top="50%"
                    transform="translateY(-50%)"
                    width="full"
                    justifyContent="space-between"
                    px={4}
                >
                    <IconButton
                        aria-label="Previous"
                        icon={<ChevronLeftIcon />}
                        fontSize="2xl"
                        onClick={() => { slides?.slickPrev() } /* Fungsi untuk navigasi ke slide sebelumnya */}
                    />
                    <IconButton
                        aria-label="Next"
                        icon={<ChevronRightIcon />}
                        fontSize="2xl"
                        onClick={() => { slides?.slickNext() } /* Fungsi untuk navigasi ke slide berikutnya */}
                    />
                </Flex>
            </Box>

        </>
    )
}

export default carousel