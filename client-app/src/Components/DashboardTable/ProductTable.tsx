import { Image, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchAllProduct } from "../../api/api";

const ProductTable = () => {
    const { data: products, isLoading, isError } = useQuery('fetchProduct', fetchAllProduct);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState('asc');

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
                        </Tr>
                    </Thead>
                    <Tbody>
                        {filteredProducts.map((product, index) => (
                            <Tr key={product.id}>
                                <Td>{index + 1}</Td>
                                <Td>
                                    <Image src={product.image} width={'30rem'} />
                                </Td>
                                <Td>{product.title}</Td>
                                <Td>{product.category}</Td>
                                <Td flexWrap={'wrap'}>{product.description}</Td>
                                <Td>{product.price}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

        </>
    )
}

export default ProductTable;
