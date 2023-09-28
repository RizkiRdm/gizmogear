import React from 'react'
import ProductCard from '@/components/Fragments/ProductCard/ProductCard';

interface Product {
    imageSrc: any
    title: string
    category: string
    linkProduct: string
    price: number
}

interface ProductDataProps {
    product: Product
}


const ProductCards: React.FC<ProductDataProps> = ({ product }) => {
    return (
        <>

            <ProductCard
                categoryTitle={product.category}
                title={product.title}
                imageSrc={product.imageSrc}
                price={product.price}
                linkProduct={product.linkProduct}
            />
        </>
    )
}

export default ProductCards