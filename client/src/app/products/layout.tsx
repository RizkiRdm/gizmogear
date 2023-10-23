import Navbar from "@/components/Layouts/navbar/Navbar"

const ProductLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <section>
                <Navbar />
                <div className="h-48">
                    <h1 className="text-5xl pt-10 px-5 font-bold capitalize">Product pages</h1>
                    <p className="text-lg px-5 pt-7 font-medium">all product are sale for you!</p>
                </div>
                <hr />
                {children}
            </section>
        </>
    )
}
export default ProductLayout