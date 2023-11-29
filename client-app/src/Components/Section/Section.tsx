import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface ProductsProps {
    title: string;
    description: string;
    category: string;
    slug: string;
    image: string;
}

interface SectionProps {
    latestProduct: ProductsProps;
}

const Section: React.FC<SectionProps> = ({ latestProduct }) => {
    // const descriptionProduct = latestProduct?.description.split(' ').slice(0, 20).join(' ');
    const decsProduct = latestProduct?.description.split(" ").slice(0, 20).join(" ")

    return (
        <>
            <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex
                    p={8}
                    flex={1}
                    align={'center'}
                    justify={'center'}
                >
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                            <Text mb={2} fontWeight={'bold'}>New Product Here !</Text>
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
                                {latestProduct?.title}
                            </Text>
                            <br />
                            <Text color={'teal.400'} as={'span'}>
                                {latestProduct?.category}
                            </Text>
                        </Heading>
                        <Text fontSize={{ base: '2xl', lg: 'xl' }} color={'gray.500'}>
                            {/* {latestProduct?.description} */}
                            {decsProduct}
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <Link to={`/products/${latestProduct?.slug}`}>
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
                <Flex flex={1} justify={'space-evenly'} align={'center'}>
                    <Image
                        boxSize={'75%'}
                        borderRadius={'md'}
                        alt={latestProduct?.title}
                        objectFit={'cover'}
                        src={latestProduct?.image}
                    />
                </Flex>
            </Stack>
        </>
    );
};

export default Section;
