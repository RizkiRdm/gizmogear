import CarouselHero from './CarouselHero'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ThreeProductState } from '../../Recoil/atom';

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

const carousel: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [slides, setSlides] = useState<Slider | null>(null)
    const threeProduct = useRecoilValue(ThreeProductState)

    return (
        <>
            <Box position={"relative"}>
                <Slider {...settings} ref={(slides => setSlides(slides))}>
                    {threeProduct.map((product) => (
                        <CarouselHero products={product} />
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
                        colorScheme='teal'
                        display={{ base: 'none', md: 'flex' }}
                        aria-label="Previous"
                        icon={<ChevronLeftIcon />}
                        fontSize="2xl"
                        onClick={() => { slides?.slickPrev() } /* Fungsi untuk navigasi ke slide sebelumnya */}
                    />
                    <IconButton
                        colorScheme='teal'
                        display={{ base: 'none', md: 'flex' }}
                        aria-label="Next"
                        icon={<ChevronRightIcon />}
                        fontSize="2xl"
                        onClick={() => { slides?.slickNext() } /* Fungsi untuk navigasi ke slide berikutnya */}
                    />
                </Flex>
            </Box >

        </>
    )
}

export default carousel