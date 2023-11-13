import { Flex, MenuItem, MenuList, SimpleGrid, Text } from "@chakra-ui/react"
import Navbar from "../../Components/Navbar/Navbar"
import NavbarDropdown from "../../Components/Navbar/NavbarDropdown"
const ProductsPage = () => {
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

            </SimpleGrid>
        </>
    )
}

export default ProductsPage