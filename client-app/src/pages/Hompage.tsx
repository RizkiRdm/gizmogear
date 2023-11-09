import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import Carousel from "../Components/Carousel/carousel"
import Navbar from "../Components/Navbar/Navbar"
import ProductCard from "../Components/ProductCard/ProductCard"
import Section from "../Components/Section/Section"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer/Footer"

const IMAGE = 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

const Hompage = () => {
    return (
        <>
            <Navbar />

            {/* homepage */}
            <Box mt={"2"} mb={"4"}>
                <Carousel />
            </Box>

            {/* Best Product */}
            <Box
                minWidth={"max-content"}
                bg={"whitesmoke"}
            >
                <Heading textAlign={"center"} textDecoration={"underline"}>Best Products</Heading>
                <Flex
                    direction={{ base: "column", md: "row", lg: "row" }}
                    justify={"center"}
                    align={"center"}
                    minWidth={"max-content"}
                    bg={"whitesmoke"}
                >
                    <SimpleGrid columns={[1, 2, 3]} spacing={2}>
                        <ProductCard title={"Samsung S23 FE"} slug={"product-1"} src={IMAGE} price={100} />
                    </SimpleGrid>
                </Flex>
            </Box>

            {/* button */}
            <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                justify={"center"}
                align={"center"}
                minWidth={"max-content"}
                bg={"whitesmoke"}
            >
                <Link to={"/products"}>
                    <Button colorScheme="teal">Views more products</Button>
                </Link>
            </Flex>

            {/* section */}
            <Box my={3}>
                <Section />
            </Box>

            {/* footer */}
            <Footer />
        </>
    )
}

export default Hompage