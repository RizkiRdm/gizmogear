import React from 'react'
import CardButon from '@/components/Elements/ProductCard/CardButon';
import CardTitle from '@/components/Elements/ProductCard/CardTitle';
import CardIcon from '@/components/Elements/ProductCard/CardIcon';
import CardImage from '@/components/Elements/ProductCard/CardImage';
import CardPrice from '@/components/Elements/ProductCard/CardPrice';
import CardCategory from '@/components/Elements/ProductCard/CardCategory';

interface Product {
    imageSrc: any
    title: string
    category: string
    productUrl: string
    price: number
}

interface ProductData {
    products: Product[]
}

const ProductCard: React.FC<ProductData> = ({ products }) => {
    return (
        <>
            {products.map((product, index) => (
                <div key={index} className='border rounded-md p-4 relative'>
                    <div className="flex flex-row items-center justify-between py-2">
                        <CardCategory categoryTitle={product.category} />
                        <CardIcon />
                    </div>
                    <div className="text-center mb-4">
                        <CardTitle title={product.title} />
                    </div>
                    <CardImage src={product.imageSrc} alt={product.title} />
                    <div className="flex flex-row items-center justify-between mt-3">
                        <CardPrice price={product.price} />
                        <CardButon label='Buy Product' productUrl={product.productUrl} />
                    </div>
                </div>

            ))}
        </>
    )
}

export default ProductCard