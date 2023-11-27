import {
    Box,
    Drawer,
    DrawerContent,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react'
import MobileNav from './MobileNav'
import SidebarContent from './SidebarContent'

const Sidebar = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />

            {children}

        </Box>
    )
}

export default Sidebar