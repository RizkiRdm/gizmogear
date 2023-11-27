import { Box, Flex, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons";

interface NavItemProps {
    icon: IconType;
    children: React.ReactNode;
    link: string
}

const NavItem = ({ icon, children, link }: NavItemProps) => {
    return (
        <Box
            as="a"
            href={link}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}
export default NavItem