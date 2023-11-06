import { Box, Link as ChakraLink, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface bannerProps {
    title: string
    slug: string
    price: number
    src: string
}

const CarouselHero: React.FC<bannerProps> = ({ slug, title, src, price }) => {
    return (
        <Box as='div' position='relative' width='full' height='96' overflow='hidden'>
            {/* image hero */}
            <Image
                src={src}
                alt={title}
                objectFit='cover'
            />

            <Box position='absolute' bottom='2' left='2' padding='6' backgroundColor='blackAlpha.500'>
                {/* title product */}
                <Text color='white' fontSize='xl' fontWeight='bold'>
                    {title}
                </Text>
                {/* price product */}
                <Text color='gray.800' fontSize='xl' fontWeight='bold'>
                    {price}
                </Text>
                {/* button/link */}
                <ChakraLink as={Link} to={`/products/${slug}`} textDecoration='none'>
                    <Box
                        as='button'
                        backgroundColor='teal.500'
                        color='white'
                        fontSize='md'
                        fontWeight='semibold'
                        py='2'
                        px='4'
                        borderRadius='md'
                        transition='all 0.2s'
                        _hover={{ backgroundColor: 'teal.600' }}
                    >
                        View Details
                    </Box>
                </ChakraLink>
            </Box>
        </Box>
    );
};

export default CarouselHero;
