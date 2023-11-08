import { Box, Link as ChakraLink, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface bannerProps {
    title: string
    description: string
    slug: string
    src: string
}

const CarouselHero: React.FC<bannerProps> = ({ slug, title, src, description }) => {
    const descripttionProduct = description.split(" ").slice(0, 10).join(" ") + ("...")
    return (
        <Flex
            direction={{ base: "column", md: "row" }} // Flex direction column for mobile and tablet, row for larger screens
            justify="center" // Center horizontally
            align="center" // Center vertically
            position="relative"
            width="100%" // Take up full width of the parent
            height="100vh" // Set a minimum height to cover the whole viewport
        >
            {/* image hero */}
            <Image
                src={src}
                alt={title}
                objectFit="cover"
                width="100%" // Ensure the image takes up full width
                height="100%" // Ensure the image takes up full height
            />

            <Box
                position="absolute"
                padding="8"
                backgroundColor="blackAlpha.500"
                borderRadius="8px"
                textAlign="center"
            >
                {/* title product */}
                <Text color="white" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                    {title}
                </Text>

                <Text color="white" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" my={"2"}>
                    {descripttionProduct}
                </Text>
                {/* button/link */}
                <ChakraLink as={Link} to={`/products/${slug}`} textDecoration="none" mt={{ base: 4, md: 0 }}>
                    <Button label="View Details" />
                </ChakraLink>
            </Box>
        </Flex>
    );
};

export default CarouselHero;
