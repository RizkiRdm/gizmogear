import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import NavbarDropdown from './NavbarDropdown'
import NavLink from './NavbarLink'
import NavbarSearch from './NavbarSearch'

const Links = [
    {
        url: "/products",
        name: 'Products'
    },
]

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box px={4} bg={'blackAlpha.900'} color={'gray.100'}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        {/* Logo */}
                        <Box as={Link} to={'/'}>
                            <Text as={'p'} fontWeight={"bold"}>GizmoGear</Text>
                        </Box>

                        {/* link navbar */}
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link, index) => (
                                <NavLink key={index} to={link.url}>{link.name}</NavLink>
                            ))}
                        </HStack>
                        <HStack spacing={4} display={{ md: 'flex' }} mx={"auto"}>
                            <NavbarSearch />
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <NavbarDropdown />
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link, index) => (
                                <NavLink key={index} to={link.url}>{link.name}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}
export default Navbar