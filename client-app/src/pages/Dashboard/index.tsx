import { Badge, Box, Card, CardBody, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import Sidebar from "../../Components/Sidebar/Sidebar"
import ProductTable from "../../Components/DashboardTable/ProductTable"

const Dashboard = () => {
    return (
        <>
            <Sidebar>
                {/* content dashboard */}
                <Box ml={{ base: 0, md: 60 }} p="4">
                    <Box >
                        <Flex justify={'space-between'} gap={'4'}>
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                w={'50%'}
                            >
                                <Stack>
                                    <CardBody>
                                        <Heading>Jumlah user</Heading>
                                        <Stack direction={'row'}>
                                            <Badge colorScheme="green">
                                                <Text fontSize={'md'}>100</Text>
                                            </Badge>
                                            <Badge colorScheme="gray">
                                                <Text fontSize={'md'}>user</Text>
                                            </Badge>
                                        </Stack>
                                    </CardBody>
                                </Stack>
                            </Card>
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                w={'50%'}
                            >
                                <Stack>
                                    <CardBody>
                                        <Heading>Jumlah barang</Heading>
                                        <Stack direction={'row'}>
                                            <Badge colorScheme="green">
                                                <Text fontSize={'md'}>100</Text>
                                            </Badge>
                                            <Badge colorScheme="gray">
                                                <Text fontSize={'md'}>barang</Text>
                                            </Badge>
                                        </Stack>
                                    </CardBody>
                                </Stack>
                            </Card>
                        </Flex>
                    </Box>
                    {/* table products */
                        <Box mt={4}>
                            <ProductTable />
                        </Box>
                </Box>
            </Sidebar>
        </>
    )
}

export default Dashboard