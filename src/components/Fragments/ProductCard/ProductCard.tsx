import React from 'react'
import CardButon from '@/components/Elements/ProductCard/CardButon';
import CardTitle from '@/components/Elements/ProductCard/CardTitle';
import CardIcon from '@/components/Elements/ProductCard/CardIcon';
import CardImage from '@/components/Elements/ProductCard/CardImage';
import CardPrice from '@/components/Elements/ProductCard/CardPrice';
import CardCategory from '@/components/Elements/ProductCard/CardCategory';

interface productCardProps {
    categoryTitle: string
    title: string
    imageSrc: any
    price: number
    linkProduct: string

}

const ProductCard: React.FC<productCardProps> = ({ categoryTitle, title, imageSrc, price, linkProduct }) => {
    return (
        <>

            <div className='border border-md rounded-md p-4 shadow-md flex flex-col relative mx-4'>
                <div className="flex flex-row items-center justify-between py-2">
                    <CardCategory categoryTitle={categoryTitle} />
                    <CardIcon />
                </div>
                <div className="text-center mb-4">
                    <CardTitle title={title} />
                </div>
                <CardImage src={imageSrc} alt={title} />
                <div className="flex flex-row items-center justify-between mt-3">
                    <CardPrice price={price} />
                    <CardButon label='Buy Product' productUrl={linkProduct} />
                </div>
            </div>
        </>
    )
}

export default ProductCard