import { Box, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { IconType } from 'react-icons';
import { FiHome } from "react-icons/fi";
import NavItem from "./NavItem";

interface SidebarProps {
    onClose: () => void;
}

interface LinkItemProps {
    name: string;
    url: string;
    icon: IconType;
}

const LinkItems: LinkItemProps[] = [
    {
        url: '/dashboard/',
        name: 'Home',
        icon: FiHome,
    },
    {
        url: '/dashboard/products',
        name: 'Products',
        icon: FiHome,
    },
]


const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={'gray.900'}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            textColor={'whitesmoke'}
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    GizmoGear
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link, index) => (
                <NavItem key={index} icon={link.icon} link={link.url}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}
export default SidebarContent