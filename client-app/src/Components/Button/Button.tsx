import { Box } from '@chakra-ui/react'

const Button: React.FC<{ label: string }> = ({ label }) => {
    return (
        <Box
            as="button"
            backgroundColor="teal.500"
            color="white"
            fontSize="md"
            fontWeight="semibold"
            py="2"
            px="4"
            borderRadius="md"
            transition="all 0.2s"
            _hover={{ backgroundColor: "teal.600" }}
        >
            {label}
        </Box>
    )
}

export default Button