import { Box, useColorModeValue } from "@chakra-ui/react"

import { Link } from "react-router-dom";

interface linkProps {
    children: React.ReactNode
    to: string
}

const NavLink: React.FC<linkProps> = ({ children, to }) => {
    return (
        <Box
            as={Link}
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.700', 'gray.900'),
            }}
            to={to}>
            {children}
        </Box>
    )
}
export default NavLink