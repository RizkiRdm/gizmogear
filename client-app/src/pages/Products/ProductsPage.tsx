import { Flex, MenuItem, MenuList, SimpleGrid, Text } from "@chakra-ui/react"
import Navbar from "../../Components/Navbar/Navbar"
import NavbarDropdown from "../../Components/Navbar/NavbarDropdown"
import { fetchAllProduct } from "../../api/api"
import { useQuery } from "react-query"
import ProductCard from "../../Components/ProductCard/ProductCard"

const ProductsPage = () => {
    const { data, isError, isLoading } = useQuery('fetch all data', fetchAllProduct)

    if (isError) return <Text>Error fetch product</Text>
    return (
        <>
            <Navbar />

            {/* dropdown filter */}
            <Flex
                justify={"end"}
                alignItems={"center"}
                direction={['column', 'row', 'row']}
                bg={"gray.900"}
                p={6}
            >
                <Text fontSize={"md"} color={"whiteAlpha.900"} mx={3}>Search By</Text>
                <NavbarDropdown label="Category">
                    <MenuList>
                        <MenuItem>helo</MenuItem>
                        <MenuItem>helo</MenuItem>
                        <MenuItem>helo</MenuItem>
                    </MenuList>
                </NavbarDropdown>
            </Flex>

            <SimpleGrid>
                {isLoading ? (
                    <Text>Loading...</Text>
                ) : (
                    <SimpleGrid columns={[1, 3, 4]}>
                        {
                            data?.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    src={product.image}
                                    title={product.title}
                                    slug={product.slug}
                                    price={product.price}
                                />
                            ))
                        }
                    </SimpleGrid>
                )}
            </SimpleGrid >
        </>
    )
}

export default ProductsPage