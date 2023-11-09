import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

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

const NavbarDropdown = () => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
            >
                <Text as={'p'} fontSize='14px' color={"gray.100"}>Hello, username</Text>
            </MenuButton>
            <MenuList>
                {authLink.map((link, index) => (
                    <MenuItem as={Link} key={index} to={link.url} color={"gray.700"}>{link.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default NavbarDropdown