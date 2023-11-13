import { Button, Menu, MenuButton, Text } from "@chakra-ui/react"

interface navbarDropdownProps {
    children: React.ReactNode
    label: string
}

const NavbarDropdown: React.FC<navbarDropdownProps> = ({ children, label }) => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
            >
                <Text as={'p'} fontSize='inherit' color={"gray.100"}>{label}</Text>
            </MenuButton>
            {children}
        </Menu>
    )
}

export default NavbarDropdown