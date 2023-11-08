import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Logo from './Logo'


const Footer = () => {
    const time = new Date()
    const currentYear = time.getFullYear()
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Logo />
                <Stack direction={'row'} spacing={6}>
                    <Box as={Link} to={'/'}>
                        Home
                    </Box>
                    <Box as={Link} to={'/products'}>
                        Products
                    </Box>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={"center"}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© {currentYear} GizmoGear. All rights reserved</Text>
                </Container>
            </Box>
        </Box>
    )
}
export default Footer