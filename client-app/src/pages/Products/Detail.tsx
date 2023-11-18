import { Box, Button, Flex, Heading, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { fetchDetailProduct, fetchSixProduct } from "../../api/api"

const DetailProduct = () => {
    const { slug } = useParams()
    const { data: product, isError, isLoading } = useQuery(['detail product', slug], () => fetchDetailProduct(slug))
    const { data: products, isError: isProductsError, isLoading: isProductsLoading } = useQuery('fetch other product', fetchSixProduct)
    if (isError || isProductsError) return <Text>Error Fetch data</Text>
    const productDesc = product?.description.split(" ").slice(0, 20).join(" ")

    return (
        <>
            <Navbar />

            {/* detail product */}
            <Box bg={"white"}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <Flex justify={"space-evenly"} bg={"blue.100"} p={{ base: 3, md: 5 }} direction={{ base: 'column', md: 'row' }}>
                        <Box
                            as={Flex}
                            boxSize={['100%', '100%', '350px']} // Adjust size for mobile, tablet, and larger screens respectively
                            justify={'center'}
                            align="center"
                            m={['5', '5', '10']} // Adjust margin for mobile, tablet, and larger screens respectively
                        >
                            <Image
                                src={product?.image}
                                alt={product?.title}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                borderRadius={'2xl'}
                            />
                        </Box>

                        <Flex
                            width={{ base: "100%", md: "md" }}
                            direction="column"
                            justify="center"
                            align={{ base: "center", md: 'start' }}
                            mt={{ base: 4, md: 0 }}
                            ml={{ base: 0, md: 4 }}
                        >
                            <Box>
                                <Text fontWeight={"bold"} color={"gray.800"}>{product?.category}</Text>
                            </Box>
                            <Box mb={3}>
                                <Heading>{product?.title}</Heading>
                            </Box>
                            <Box mb={3}>
                                <Text>{productDesc}</Text>
                            </Box>
                            <Box>
                                <Heading>Price : ${product?.price}</Heading>
                            </Box>
                            <Box mt='4' w={'100%'}>
                                <Button colorScheme="teal" >Buy Product</Button>
                            </Box>
                        </Flex>
                    </Flex>
                )}
            </Box>

            {/* search other Product */}
            <Box mt={5} bg={"blackAlpha.100"}>
                <Heading ms={4}>Search Other Product</Heading>
                <Flex
                    direction={{ base: "column", md: "row", lg: "row" }}
                    justify={"center"}
                    align={"center"}
                >
                    {isProductsLoading ? (
                        <Spinner />
                    ) : (
                        <SimpleGrid columns={[1, 2, 4]} spacing={4}>
                            {products?.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    slug={product.slug}
                                    src={product.image}
                                    price={product.price}
                                />
                            ))}
                        </SimpleGrid>
                    )}

                </Flex>
            </Box >
        </>
    )
}

export default DetailProduct