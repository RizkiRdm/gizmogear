/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useQuery } from 'react-query'
import { Link } from "react-router-dom"
import Carousel from "../Components/Carousel/carousel"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import ProductCard from "../Components/ProductCard/ProductCard"
import Section from "../Components/Section/Section"
import { fetchLatestProduct, fetchSixProduct, fetchThreeProduct } from "../api/api"
import { useRecoilState } from "recoil"
import { ThreeProductState } from "../Recoil/atom"


const Hompage = () => {
    const [threeProduct, setThreeProduct] = useRecoilState(ThreeProductState);


    const { data, isLoading, isError } = useQuery('fetchSixProduct', fetchSixProduct);
    const { data: threeProductData, isLoading: isLoadingThreeProduct, isError: isErrorThreeProduct } = useQuery('fetchThreeProduct', fetchThreeProduct);
    if (threeProductData) {
        setThreeProduct(threeProductData)
    }

    const { data: latestProductData, isLoading: isLoadingLatestProduct, isError: isErrorLatestProduct } = useQuery('fetchLatestProduct', fetchLatestProduct);
    console.log(threeProduct)
    if (isError || isErrorThreeProduct || isErrorLatestProduct) return <p>Error fetching data</p>;

    return (
        <>
            <Navbar />

            {/* homepage */}
            <Box mt={"2"} mb={"4"}>
                {isLoadingThreeProduct ? (
                    <Text>Loading...</Text>
                ) : threeProductData && (
                    <Carousel />
                )}
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
                        <Text>loading..</Text>
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
                {isLoadingLatestProduct ? (<Text>Loading...</Text>) : (<Section latestProduct={latestProductData} />)}
            </Box>
            {/* footer */}
            <Footer />
        </>
    )
}

export default Hompage