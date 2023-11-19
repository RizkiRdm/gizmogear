import { Box, Button, Link as ChakraLink, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

interface inputProps {
    username: string
    password: string
}

const Register = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<inputProps>();

    const onSubmit = (data: string) => {
        console.log(data)
    }

    return (
        <>
            {/* navbar */}
            <Navbar />

            {/* login form */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <Box
                    bg="gray.800"
                    p={6}
                    rounded="md"
                    shadow="md"
                    width="96"
                    color={"whitesmoke"}
                >
                    <Heading as="h2" fontWeight="bold" fontSize="2xl" textAlign="left" mb={4}>
                        Register Field
                    </Heading>

                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isRequired>
                            <Box>
                                <FormLabel>Username</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Enter username!"
                                    {...register('username', {
                                        required: true,
                                    })}
                                />
                            </Box>
                            {errors.username?.type === "required" && (
                                <Text color={'red.400'} mt={1}>username is required.</Text>
                            )}

                            {/* password */}
                            <InputGroup size='md' my={3}>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    {...register('password', {
                                        required: true,
                                        minLength: 8
                                    })}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                            {errors.password?.type === 'required' && (
                                <Text>password is required</Text>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <Text>Password at least 8 character or more</Text>
                            )}
                            <Button colorScheme="blue" type="submit">Login</Button>
                        </FormControl>
                    </form>
                    <Box mt={2}>
                        <Text
                            color={"whitesmoke"}
                            fontSize={'sm'}
                        >
                            have an account{' '}
                            <ChakraLink
                                as={Link}
                                to={'/login'}
                                color={"blue.300"}
                                fontWeight={'bold'}
                                textDecoration="none"
                            >
                                Login here!
                            </ChakraLink>
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Register