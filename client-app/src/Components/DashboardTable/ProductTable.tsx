import {
    Button,
    Flex,
    HStack,
    Image,
    Input,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { fetchAllProduct } from "../../api/api";
import CreateModal from "../DashboardModal/CreateModal";
import EditProductModal from "../DashboardModal/EditModal";

const ProductTable = () => {
    const { data: products, isLoading, isError } = useQuery('fetchProduct', fetchAllProduct);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // State untuk mengatur modal Create
    const {
        isOpen: isCreateOpen,
        onOpen: onCreateOpen,
        onClose: onCreateClose
    } = useDisclosure();

    // show modal for create
    const handleShowModal = () => {
        onCreateOpen();
    };

    // show modal for edit
    // State untuk mengatur modal Create
    const {
        isOpen: isEditOpen,
        onOpen: onEditOpen,
        onClose: onEditClose
    } = useDisclosure();

    const handleShowEditModal = () => {
        onCreateOpen();
    };
    const filteredProducts = useMemo(() => {
        if (!products) return [];

        let filtered = [...products];

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort by price ASC or DESC
        return filtered.sort((a, b) => {
            const priceA: number | string = a.price;
            const priceB: number | string = b.price;

            return sortType === 'asc' ? priceA - priceB : priceB - priceA;
        });
    }, [products, searchTerm, sortType]);
    // pagination item
    const indexLastItem = currentPage * itemsPerPage;
    const indexFirstItem = currentPage - itemsPerPage;
    const currentItems = filteredProducts.slice(indexFirstItem, indexLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching data</p>;

    return (
        <>
            <HStack>
                <Input
                    type="text"
                    placeholder="Search by product name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button colorScheme="blue" onClick={handleShowModal}>Create New Product</Button>
            </HStack>
            {filteredProducts.length === 0 && <Text>No products found</Text>}
            {/* Render Table */}
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
                                    <Image src={product.image} w={'100%'} height={"50%"} objectFit={'cover'} />
                                </Td>
                                <Td>{product.title}</Td>
                                <Td>{product.category}</Td>
                                <Td whiteSpace={'pre-wrap'}>{product.description}</Td>
                                <Td>{product.price}</Td>
                                <Td>
                                    <Flex justify='space-evenly' align={'center'} gap={5}>
                                        <Button colorScheme="yellow" onClick={handleShowEditModal}>Edit</Button>
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

            <CreateModal
                onOpen={isCreateOpen}
                onClose={onCreateClose}
            />

            <EditProductModal isOpen={onEditOpen} onClose={onEditClose} />
        </>
    );
};

export default ProductTable;
