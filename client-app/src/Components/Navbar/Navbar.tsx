import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    HStack,
    IconButton,
    MenuItem,
    MenuList,
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

const authLink = [
    {
        url: "/login",
        name: 'Login'
    },
    {
        url: "/register",
        name: 'Register'
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
                    <HStack spacing={8} alignItems={'center'} flex={1} mx={2}>
                        {/* Logo */}
                        <Box as={Link} to={'/'} flexShrink={0}>
                            <Text as={'p'} fontWeight={"bold"}>GizmoGear</Text>
                        </Box>

                        {/* link navbar */}
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link, index) => (
                                <NavLink key={index} to={link.url}>{link.name}</NavLink>
                            ))}
                        </HStack>
                        <Flex alignItems="center" justifyContent="center" flex={1}>
                            <HStack spacing={4} display={{ md: 'flex' }} mx={"auto"}>
                                <NavbarSearch />
                            </HStack>
                        </Flex>
                        <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
                            <NavbarDropdown label={`Hello`}>
                                <MenuList>
                                    {authLink.map((link, index) => (
                                        <MenuItem as={Link} key={index} to={link.url} color={"gray.700"}>{link.name}</MenuItem>
                                    ))}
                                </MenuList>
                            </NavbarDropdown>
                        </Flex>
                    </HStack>
                </Flex >

                {
                    isOpen ? (
                        <Box pb={4} display={{ md: 'none' }} >
                            <Stack as={'nav'} spacing={4}>
                                {Links.map((link, index) => (
                                    <NavLink key={index} to={link.url}>{link.name}</NavLink>
                                ))}
                                <Flex justify={"start"} ms={2}>
                                    <NavbarDropdown label={`Hello`}>
                                        <MenuList>
                                            {authLink.map((link, index) => (
                                                <MenuItem as={Link} key={index} to={link.url} color={"gray.700"}>{link.name}</MenuItem>
                                            ))}
                                        </MenuList>
                                    </NavbarDropdown>
                                </Flex>
                            </Stack >
                        </Box >
                    ) : null}
            </Box >
        </>
    )
}
export default Navbar