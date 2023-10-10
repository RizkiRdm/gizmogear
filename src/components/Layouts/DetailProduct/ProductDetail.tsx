import DetailProduct from '@/components/Fragments/DetailProduct/DetailsProduct'
import React from 'react'

interface Product {
    _id: number
    image: string
    title: string
    category: string
    description: string
    price: number
}

interface ProductDataProps {
    product: Product
}

const ProductDetail: React.FC<ProductDataProps> = ({ product }) => {
    return (
        <>
            <DetailProduct
                image={product.image}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price} />
        </>
    )
}

export default ProductDetail