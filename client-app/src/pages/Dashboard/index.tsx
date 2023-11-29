import { Badge, Box, Card, CardBody, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import ProductTable from "../../Components/DashboardTable/ProductTable"
import Navbar from "../../Components/Navbar/Navbar"

const Dashboard = () => {
    return (
        <>
            {/* content dashboard */}
            <Navbar />

            <Flex p="4" direction={'column'}>
                <Box>
                    <Flex justify={['center', 'space-evenly', 'space-evenly']} gap={'4'} direction={['column', 'row', 'row']}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            w={['100%', '50%', '50%']}
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
                            w={['100%', '50%', '50%']}
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
                <Box mt={4}>
                    <ProductTable />
                </Box>
            </Flex>
        </>
    )
}

export default Dashboard