import {
    Box,
    Heading,
    Image,
    Stack,
    Text,
    Link as ChakraLink,
    useColorModeValue
} from '@chakra-ui/react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

interface ProductProps {
    title: string
    slug: string
    src: string
    price: number
}

const ProductCard: React.FC<ProductProps> = ({ src, title, price, slug }) => {
    return (
        <Box py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('whiteAlpha.400', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
            >
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                >
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={src}
                        alt={title}
                    />
                </Box>

                <Stack pt={10} align={'center'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {title}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            ${price}
                        </Text>
                    </Stack>
                    <Stack direction={"column"} align={"center"}>
                        <ChakraLink as={Link} to={`/products/${slug}`} textDecoration="none" mt={{ base: 4, md: 0 }}>
                            <Button label='Buy Product' />
                        </ChakraLink>
                    </Stack>
                </Stack>

            </Box>
        </Box>

    )
}
export default ProductCard