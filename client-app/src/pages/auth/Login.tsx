import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Box, Button, Link as ChakraLink, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import Navbar from "../../Components/Navbar/Navbar"
import { isLoggedInState, roleState, usernameState } from "../../Recoil/atom"
import { loginUser } from "../../api/api"
interface inputProps {
    data: string
    username: string
    password: string
}

const Login = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<inputProps>();

    const setIsLoggedIn = useSetRecoilState(isLoggedInState)
    const setUsername = useSetRecoilState(usernameState)
    const setRole = useSetRecoilState(roleState)

    const onSubmit: SubmitHandler<inputProps> = async (data) => {
        try {
            const { access_token, username, role } = await loginUser(data)

            // jika login berhasil
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('username', username);
            localStorage.setItem('role', role);

            setIsLoggedIn(true)
            setUsername(username)
            setRole(role)

            if (role === 'admin') {
                navigate('/dashboard')
            } else {
                navigate('/products')
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {/* navbar */}
            <Navbar />

            {/* login form */}
            <Flex
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
                        Login Field
                    </Heading>

                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isRequired>
                            {/* username */}
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
                            <Box my={3}>
                                <FormLabel>Password</FormLabel>
                                <InputGroup size='md'>
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
                            </Box>
                            <Button colorScheme="blue" type="submit">Login</Button>
                        </FormControl>
                    </form>
                    <Box mt={2}>
                        <Text
                            color={"whitesmoke"}
                            fontSize={'sm'}
                        >
                            dont have account{' '}
                            <ChakraLink
                                as={Link}
                                to={'/register'}
                                color={"blue.300"}
                                fontWeight={'bold'}
                                textDecoration="none"
                            >
                                Register here!
                            </ChakraLink>
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default Login