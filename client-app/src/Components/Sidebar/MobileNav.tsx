import { Box, Flex, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import { FiChevronDown, FiMenu } from "react-icons/fi"
import SearchInput from "../Navbar/NavbarSearch"
import { useNavigate } from "react-router-dom"

interface MobileProps {
    onOpen: () => void
}

const MobileNav = ({ onOpen }: MobileProps) => {
    // function logout
    const navigate = useNavigate()
    const handleLogout = () => {

        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');

        window.location.reload()
        setTimeout(() => {
            navigate('/')
        }, 200);
    }

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={'gray.900'}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
        >
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
                color={'white'}
            >
                GizmoGear
            </Text>

            <HStack spacing={{ base: '0', md: '6' }}>
                <Flex align={'center'} justify={'space-evenly'} textColor={'white'}>
                    <SearchInput />
                </Flex>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                    textColor={'white'}
                                >
                                    <Text fontSize="sm">Justina Clark</Text>
                                    <Text fontSize="xs" color="gray.300">
                                        Admin
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <form onClick={handleLogout}>
                                <MenuItem>Sign out</MenuItem>
                            </form>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    )
}

export default MobileNav