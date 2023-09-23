import React from 'react'
import ProductCard from '@/components/Fragments/ProductCard/ProductCard';
import image1 from '../../../../public/wallhaven-gp26od.jpg';

const data = [
    {
        imageSrc: image1,
        title: 'product',
        category: 'console',
        productUrl: 'login',
        price: 10
    }
]

const ProductCards = () => {
    return (
        <>
            <ProductCard products={data} />
        </>
    )
}

export default ProductCards