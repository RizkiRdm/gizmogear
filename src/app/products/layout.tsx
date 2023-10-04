import Navbar from "@/components/Layouts/navbar/Navbar"

const ProductLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return <section>
        <Navbar />
        {children}
    </section>
}
export default ProductLayout