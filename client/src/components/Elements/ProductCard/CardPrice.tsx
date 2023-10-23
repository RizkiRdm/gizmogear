import React from 'react'
interface priceProps {
    price: number
}
const CardPrice: React.FC<priceProps> = ({ price }) => {
    return (
        <p className='text-lg font-semibold text-gray-900 dark:text-white'>Rp.{price}</p>
    )
}

export default CardPrice