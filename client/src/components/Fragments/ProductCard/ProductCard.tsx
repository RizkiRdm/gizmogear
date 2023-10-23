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
    images: any
    price: number
    id: number

}

const ProductCard: React.FC<productCardProps> = ({ categoryTitle, title, images, price, id }) => {
    return (
        <>
            <div className="mx-auto mt-5 w-80 transform overflow-hidden rounded-lg dark:bg-slate-800 shadow-md duration-100 hover:bg-slate-600">
                <CardImage src={images} alt={title} />
                <div className="p-4">
                    {/* product title */}
                    <div className="mb-2">
                        <CardTitle title={title} />
                    </div>
                    {/* product category */}
                    <div className="mb-2">
                        <CardCategory categoryTitle={categoryTitle} />
                    </div>

                    {/* product price */}
                    <div className="flex items-center">
                        <CardPrice price={price} />

                        <div className="ml-auto">
                            <CardButon label='Buy Product' productUrl={`/products/${id}`} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard