'use client'
import ProductCategory from '@/components/Elements/DetailProduct/ProductCategory'
import ProductDescription from '@/components/Elements/DetailProduct/ProductDescription'
import ProductPrice from '@/components/Elements/DetailProduct/ProductPrice'
import ProductTitle from '@/components/Elements/DetailProduct/ProductTitle'
import React from 'react'
import ProductImage from './DetailProductImage'
import Notification from '../notification/Notification'
import NotificationContainer from '@/components/Layouts/notification/Notification'

interface DetailProps {
    image: any
    title: string
    category: string
    description: string
    price: number
}

const DetailProduct: React.FC<DetailProps> = ({ image, title, category, description, price }) => {

    const onBuy = () => {
    }
    return (
        <>
            <div className="flex gap-4">
                {/* image carousel */}
                <div className="flex-col w-1/2">
                    <ProductImage image={image} alt={title} />
                </div>

                {/* detail */}
                <div className="flex-col w-1/2">
                    <div className="mb-2">
                        <ProductTitle title={title} />
                    </div>

                    <div className="mb-2">
                        <ProductCategory category={category} />
                    </div>

                    <div className="mb-1">
                        <ProductDescription description={description} />
                    </div>

                    <div className="my-1">
                        <ProductPrice price={price} />
                    </div>

                    {/* button buy */}
                    <div className="w-full">
                        <NotificationContainer handleButtonClick={function (): void {
                            throw new Error('Function not implemented.')
                        }} title={title} price={price} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct