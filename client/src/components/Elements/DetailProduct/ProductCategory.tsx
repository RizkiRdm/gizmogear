import React, { FC } from 'react'

interface categoryProps {
    category: string
}

const ProductCategory: FC<categoryProps> = ({ category }) => {
    return (
        <>
            <p className='text-xl text-slate-50 font-bold text-left'>
                {category}
            </p>
        </>
    )
}

export default ProductCategory