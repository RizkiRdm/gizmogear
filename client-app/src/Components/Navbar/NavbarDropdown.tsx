import { Button, Menu, MenuButton, Text } from "@chakra-ui/react"
import { useRecoilState } from "recoil"
import { isLoggedInState, roleState, usernameState } from "../../Recoil/atom"

interface navbarDropdownProps {
    children: React.ReactNode
}

const NavbarDropdown: React.FC<navbarDropdownProps> = ({ children }) => {
    const [getUsername] = useRecoilState(usernameState)
    const [isLoggedIn] = useRecoilState(isLoggedInState)
    const [isRole] = useRecoilState(roleState)
    let label: string | JSX.Element = 'Hello User'

    if (isLoggedIn) {
        label = isRole === 'admin' ? `${getUsername}(ADMIN)` : getUsername
    }

    return (
        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
            >
                <Text as={'p'} fontSize='inherit' color={"gray.100"}>
                    {label}
                </Text>
            </MenuButton>
            {children}
        </Menu>
    )
}

export default NavbarDropdown