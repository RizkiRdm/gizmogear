import { Button, Flex, Image, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import { useQuery } from "react-query";
import { fetchAllProduct } from "../../api/api";

const ProductTable = () => {
    const { data: products, isLoading, isError } = useQuery('fetchProduct', fetchAllProduct);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching data</p>;

    let filteredProducts = [...products];

    // Filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Sort by price ASC or DESC
    filteredProducts = filteredProducts.sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;

        if (sortType === 'asc') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });

    // pagination item
    const indexLastItem = currentPage * itemsPerPage
    const indexFirstItem = currentPage - itemsPerPage
    const currentItems = filteredProducts.slice(indexFirstItem, indexLastItem)

    const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber)

    return (
        <>
            <Input
                type="text"
                placeholder="Search by product name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredProducts.length === 0 && <Text>No products found</Text>}
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Image</Th>
                            <Th>
                                Product
                            </Th>
                            <Th>Category</Th>
                            <Th>Description</Th>
                            <Th onClick={() => setSortType(sortType === 'asc' ? 'desc' : 'asc')} w={'32'}>
                                Price <span>
                                    {sortType === 'asc' ? ' ▲' : ' ▼'}
                                </span>
                            </Th>
                            <Th textAlign={'center'}>
                                Action
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentItems.map((product, index) => (
                            <Tr key={product.id}>
                                <Td>{index + 1}</Td>
                                <Td>
                                    <Image src={product.image} boxSize={'5em'} objectFit={'contain'} />
                                </Td>
                                <Td>{product.title}</Td>
                                <Td>{product.category}</Td>
                                <Td whiteSpace={'pre-wrap'}>{product.description}</Td>
                                <Td>{product.price}</Td>
                                <Td>
                                    <Flex justify='space-evenly' align={'center'} gap={5}>
                                        <Button colorScheme="yellow">Edit</Button>
                                        <Button colorScheme="red">Delete</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            {/* pagination button */}
            {filteredProducts.length > itemsPerPage ? (
                <Flex>
                    {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, i) => (
                        <Button key={i} mx="1" onClick={() => paginate(i + 1)}>
                            {i + 1}
                        </Button>
                    ))}
                </Flex>
            ) : null}
        </>
    )
}

export default ProductTable;
