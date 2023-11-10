import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from "react-router-dom"
import Carousel from "../Components/Carousel/carousel"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import ProductCard from "../Components/ProductCard/ProductCard"
import Section from "../Components/Section/Section"

interface ProductProps {
    id: number;
    title: string;
    slug: string;
    image: string;
    price: number;
}

// fetch data product
const fetchProducts = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/products/')
        const dataProduct: ProductProps[] = res.data.data
        return dataProduct
    } catch (error) {
        console.error(error)
    }

}


const Hompage = () => {
    const { data, isLoading, isError } = useQuery('fetchProducts', fetchProducts)
    if (isError) return <p>error fetching data</p>
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
                    {isLoading ? (
                        <p>loading..</p>
                    ) : (
                        <SimpleGrid columns={[1, 2, 3]} spacing={2}>
                            {data?.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    src={product.image}
                                    title={product.title}
                                    slug={product.slug}
                                    price={product.price}
                                />
                            ))}
                        </SimpleGrid>
                    )}
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
                <Section
                    src={"dakkjfajdkfjak"}
                    title={'1'}
                    description={"dajfkjadfjadjf df djkahfjadhf kdhak f"}
                    category={"cagakfa"}
                    slug={"kjdakfafj"}
                />
            </Box>

            {/* footer */}
            <Footer />
        </>
    )
}

export default Hompage