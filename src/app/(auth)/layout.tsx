import Navbar from "@/components/Layouts/navbar/Navbar"

const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return <section>
        <Navbar />
        {children}
    </section>
}
export default AuthLayout