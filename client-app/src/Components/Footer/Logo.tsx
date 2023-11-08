import { Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"

/* eslint-disable @typescript-eslint/no-explicit-any */
const Logo = () => {
    return (
        <Link to={"/"}>
            <Heading fontWeight={"bold"} fontSize={"2xl"} color="gray.800">GizmoGear</Heading>
        </Link>
    )
}
export default Logo