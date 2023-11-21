import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text } from "@chakra-ui/react"
import { Helmet } from "react-helmet"
import { useQuery } from "react-query"
import { useRecoilState } from "recoil"
import Navbar from "../../Components/Navbar/Navbar"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { filterProductState } from "../../Recoil/atom"
import { fetchAllProduct, fetchCategoriesProduct, fetchFilteredProducts } from "../../api/api"

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useRecoilState(filterProductState)

    const { data: products } = useQuery('fetch all data', fetchAllProduct)
    const { data: categories, isError: isCategoriesError } = useQuery('fetch categories', fetchCategoriesProduct)
    const { data: filteredProducts, isLoading, isError } = useQuery(
        ['filteredProducts', selectedCategory],
        () => fetchFilteredProducts(selectedCategory),
        { enabled: !!selectedCategory }
    );
    if (isError || isCategoriesError) return <Text>Error fetch product</Text>

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category)
    }
    return (
        <>

            <Helmet>
                <title>GizmoGear</title>
                <meta name="description" content="GizmoGear adalah platform terbaik untuk menemukan gadget yang anda inginkan." />
            </Helmet>


            <Navbar />

            {/* dropdown filter */}
            <Flex
                justify={"end"}
                alignItems={"center"}
                direction={['column', 'row', 'row']}
                bg={"gray.900"}
                p={6}
            >
                <Text fontSize={"md"} color={"whiteAlpha.900"} mx={3}>
                    Search By
                </Text>
                <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}
                    >
                        <Text as={'p'} fontSize='inherit' color={"gray.100"}>
                            {selectedCategory ? selectedCategory : 'Category'}
                        </Text>
                    </MenuButton>

                    <MenuList zIndex={10} >
                        {categories?.map((category, index) => (
                            <MenuItem key={index} onClick={() => handleCategorySelect(category)}>{category}</MenuItem>
                        ))}
                    </MenuList >
                </Menu>
            </Flex >

            <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                justify={"center"}
                align={"center"}
            >
                {isLoading ? (
                    <Text>loading..</Text>
                ) : (
                    <SimpleGrid columns={[1, 2, 4]} spacing={2}>
                        {(selectedCategory ? filteredProducts : products)?.map((product: { id: number; image: string; title: string; slug: string; price: number }) => (
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
        </>
    )
}

export default ProductsPage

