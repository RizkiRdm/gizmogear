import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
interface productsProps {
    title: string
    description: string
    category: string
    slug: string
    src: string
}
const Section: React.FC<productsProps> = ({ title, description, slug, category, src }) => {
    const descripttionProduct = description.split(" ").slice(0, 20).join(" ") + ("")
    return (
        <Stack
            minH={'50vh'}
            direction={{ base: 'column', md: 'row' }}
        >
            <Flex
                p={8}
                flex={1}
                align={'center'}
                justify={'center'}
            >
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'teal.300',
                                zIndex: -1,
                            }}
                        >
                            {/* title product */}
                            {title}
                        </Text>

                        <br />{' '}
                        {/* category product */}
                        <Text color={'teal.400'} as={'span'}>
                            {category}
                        </Text>{' '}
                    </Heading>

                    {/* description product */}
                    <Text fontSize={{ base: '2xl', lg: 'xl' }} color={'gray.500'}>
                        {descripttionProduct}
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Link to={`/products/${slug}`}>
                            <Button
                                rounded={'md'}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Show More About Product
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
            {/* image product */}
            <Flex flex={1}>
                <Image
                    alt={title}
                    objectFit={'cover'}
                    src={src}
                />
            </Flex>
        </Stack>
    )
}
export default Section