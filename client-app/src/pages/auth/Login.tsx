import { Box, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Box
                bg="zinc.800"
                p={6}
                rounded="md"
                shadow="md"
                width="96"
            >
                <Heading as="h2" fontWeight="bold" fontSize="2xl" textAlign="left" mb={4}>
                    hello
                </Heading>
                <Box mt={2}>
                    <Text className="capitalize text-slate-50 text-sm">
                        have an account{' '}
                        <Link to={'login'} color="blue.400">
                            login here!
                        </Link>
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Login